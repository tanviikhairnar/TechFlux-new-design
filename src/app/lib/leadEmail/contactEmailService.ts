import { canUseEmailJs, getCustomerSenderEmail, getDefaultTemplateId, getInternalReceiverEmails, getPrimaryInternalEmail, isEmailJsDeliveryError, sendEmail } from './sharedEmailClient';
import { ContactLead, LeadEmailDelivery } from './types';

const TEMPLATE_CONTACT_CUSTOMER = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_CUSTOMER || getDefaultTemplateId();
const TEMPLATE_CONTACT_INTERNAL = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_INTERNAL || getDefaultTemplateId();

export async function sendContactEmails(lead: ContactLead): Promise<LeadEmailDelivery> {
  const customerSubject = 'Thanks for Contacting Techflux Solutions';
  const customerMessage = `Hi ${lead.firstName},

Thank you for contacting Techflux Solutions.

We have received your message and our team will review your requirements shortly.

What we usually evaluate first:
- Project scope and goals
- Technical approach
- Timeline expectations
- Budget alignment

We will get back to you within 24 hours.

Best regards,
Techflux Solutions
https://techflux.in`;

  const internalSubject = 'New Contact Form Inquiry - Techflux Website';
  const internalMessage = `A new contact form inquiry has been submitted.

Lead Details:
Name: ${lead.firstName} ${lead.lastName}
Email: ${lead.email}
Company: ${lead.company}
Project Type: ${lead.projectType}
Budget: ${lead.budget}
Message: ${lead.message}

Please review and respond within 24 hours.
Lead Source: Techflux Website - Contact Form`;

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
        templateId: TEMPLATE_CONTACT_CUSTOMER,
        fromEmail: getCustomerSenderEmail(),
        replyTo: getPrimaryInternalEmail(),
        params: {
          FirstName: lead.firstName,
          LastName: lead.lastName,
          FullName: `${lead.firstName} ${lead.lastName}`.trim(),
          Email: lead.email,
          Company: lead.company,
          ProjectType: lead.projectType,
          Budget: lead.budget,
        },
      }),
      Promise.all(
        getInternalReceiverEmails().map((email) =>
          sendEmail({
            toEmail: email,
            toName: 'Techflux Team',
            subject: internalSubject,
            message: internalMessage,
            templateId: TEMPLATE_CONTACT_INTERNAL,
            replyTo: lead.email,
            params: {
              FirstName: lead.firstName,
              LastName: lead.lastName,
              FullName: `${lead.firstName} ${lead.lastName}`.trim(),
              Email: lead.email,
              Company: lead.company,
              ProjectType: lead.projectType,
              Budget: lead.budget,
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
