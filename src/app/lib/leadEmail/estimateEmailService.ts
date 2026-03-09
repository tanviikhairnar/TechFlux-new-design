import { canUseEmailJs, getCustomerSenderEmail, getDefaultTemplateId, getInternalReceiverEmails, getPrimaryInternalEmail, isEmailJsDeliveryError, sendEmail } from './sharedEmailClient';
import { EstimateLead, LeadEmailDelivery } from './types';

const TEMPLATE_ESTIMATE_CUSTOMER = import.meta.env.VITE_EMAILJS_TEMPLATE_ESTIMATE_CUSTOMER || getDefaultTemplateId();
const TEMPLATE_ESTIMATE_INTERNAL = import.meta.env.VITE_EMAILJS_TEMPLATE_ESTIMATE_INTERNAL || getDefaultTemplateId();

export async function sendEstimateEmails(lead: EstimateLead): Promise<LeadEmailDelivery> {
  const customerSubject = 'Your Project Estimate Request - Techflux Solutions';
  const customerMessage = `Hi ${lead.firstName},

Thank you for submitting your project details.

Our team at Techflux Solutions is reviewing your requirements to prepare an initial estimate and development approach.

Based on your submission, we will analyze:
- Platform requirements
- Technical architecture
- Development timeline
- Estimated cost range

You can expect a response from our team within 24 hours.

If your project involves SaaS platforms, AI integrations, or on-demand applications, we may recommend a short strategy call to discuss the best approach.

We appreciate the opportunity to collaborate with you.

Best regards,
Techflux Solutions
https://techflux.in`;

  const internalSubject = 'New Project Estimate Request - Techflux Website';
  const internalMessage = `New project estimate request received.

Lead Details:
Name: ${lead.firstName} ${lead.lastName}
Email: ${lead.email}
Company: ${lead.company}
Project Type: ${lead.projectType}
Budget: ${lead.budget}
Timeline: ${lead.timeline}
Project Details: ${lead.message}

Please review and respond within 24 hours.
Lead Source: Techflux Website - Project Estimate Form`;

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
        templateId: TEMPLATE_ESTIMATE_CUSTOMER,
        fromEmail: getCustomerSenderEmail(),
        replyTo: getPrimaryInternalEmail(),
        params: {
          first_name: lead.firstName,
          last_name: lead.lastName,
          FirstName: lead.firstName,
          LastName: lead.lastName,
          Email: lead.email,
          Company: lead.company,
          ProjectType: lead.projectType,
          Budget: lead.budget,
          Timeline: lead.timeline,
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
            templateId: TEMPLATE_ESTIMATE_INTERNAL,
            replyTo: lead.email,
            params: {
              first_name: lead.firstName,
              last_name: lead.lastName,
              FirstName: lead.firstName,
              LastName: lead.lastName,
              Email: lead.email,
              Company: lead.company,
              ProjectType: lead.projectType,
              Budget: lead.budget,
              Timeline: lead.timeline,
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
