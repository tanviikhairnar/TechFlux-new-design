import { canUseEmailJs, getCustomerSenderEmail, getDefaultTemplateId, getInternalReceiverEmails, getPrimaryInternalEmail, isEmailJsDeliveryError, sendEmail } from './sharedEmailClient';
import { LeadEmailDelivery, StrategyCallLead } from './types';

const TEMPLATE_STRATEGY_CUSTOMER = import.meta.env.VITE_EMAILJS_TEMPLATE_STRATEGY_CUSTOMER || getDefaultTemplateId();
const TEMPLATE_STRATEGY_INTERNAL = import.meta.env.VITE_EMAILJS_TEMPLATE_STRATEGY_INTERNAL || getDefaultTemplateId();

export async function sendStrategyCallEmails(lead: StrategyCallLead): Promise<LeadEmailDelivery> {
  const customerSubject = 'Your Strategy Call Request Received - Techflux Solutions';
  const customerMessage = `Hi ${lead.firstName},

Thank you for reaching out to Techflux Solutions.

We've received your request to schedule a strategy call with our team. One of our specialists will review your project details and get back to you shortly to confirm the meeting.

During the call, we typically discuss:
- Your product idea or current platform
- Technical architecture options
- Timeline and development roadmap
- Estimated budget range

Our goal is to help you understand the best technical approach before starting development.

If there is anything specific you'd like us to prepare before the call, feel free to reply to this email.

Looking forward to speaking with you.

Best regards,
Techflux Solutions
Building Scalable SaaS, AI & On-Demand Platforms
https://techflux.in`;

  const internalSubject = 'New Strategy Call Lead - Techflux Website';
  const internalMessage = `New strategy call request received from the website.

Lead Details:
Name: ${lead.firstName} ${lead.lastName}
Email: ${lead.email}
Company: ${lead.company}
Project Type: ${lead.projectType}
Budget Range: ${lead.budget}
Message: ${lead.message}

Please review the request and follow up with the lead within 12 hours.
Lead Source: Techflux Website - Strategy Call Form`;

  if (!canUseEmailJs()) {
    throw new Error('Direct email is not configured. Set EmailJS env keys and restart the app.');
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        templateId: TEMPLATE_STRATEGY_CUSTOMER,
        fromEmail: getCustomerSenderEmail(),
        replyTo: getPrimaryInternalEmail(),
        params: {
          first_name: lead.firstName,
          last_name: lead.lastName,
          full_name: `${lead.firstName} ${lead.lastName}`.trim(),
          email: lead.email,
          company: lead.company,
          project_type: lead.projectType,
          budget: lead.budget,
          message: lead.message,
          FirstName: lead.firstName,
          LastName: lead.lastName,
          Email: lead.email,
          Company: lead.company,
          ProjectType: lead.projectType,
          Budget: lead.budget,
          Message: lead.message,
        },
      }),
      Promise.all(
        getInternalReceiverEmails().map((email) =>
          sendEmail({
            toEmail: email,
            toName: 'Techflux Team',
            subject: internalSubject,
            message: internalMessage,
            templateId: TEMPLATE_STRATEGY_INTERNAL,
            replyTo: lead.email,
            params: {
              first_name: lead.firstName,
              last_name: lead.lastName,
              full_name: `${lead.firstName} ${lead.lastName}`.trim(),
              email: lead.email,
              company: lead.company,
              project_type: lead.projectType,
              budget: lead.budget,
              message: lead.message,
              FirstName: lead.firstName,
              LastName: lead.lastName,
              Email: lead.email,
              Company: lead.company,
              ProjectType: lead.projectType,
              Budget: lead.budget,
              Message: lead.message,
            },
          }),
        ),
      ),
    ]);

    return 'emailjs';
  } catch (error) {
    if (!isEmailJsDeliveryError(error)) throw error;
    throw error;
  }
}
