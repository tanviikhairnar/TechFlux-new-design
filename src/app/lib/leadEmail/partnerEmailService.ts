import { canUseEmailJs, getCustomerSenderEmail, getDefaultTemplateId, getInternalReceiverEmails, getPrimaryInternalEmail, isEmailJsDeliveryError, sendEmail } from './sharedEmailClient';
import { LeadEmailDelivery, PartnerLead } from './types';

const TEMPLATE_PARTNER_CUSTOMER = import.meta.env.VITE_EMAILJS_TEMPLATE_PARTNER_CUSTOMER || getDefaultTemplateId();
const TEMPLATE_PARTNER_INTERNAL = import.meta.env.VITE_EMAILJS_TEMPLATE_PARTNER_INTERNAL || getDefaultTemplateId();

export async function sendPartnerEmails(lead: PartnerLead): Promise<LeadEmailDelivery> {
  const customerSubject = 'Partnership Request Received - Techflux Solutions';
  const customerMessage = `Hi ${lead.firstName},

Thank you for your interest in partnering with Techflux Solutions.

We work with agencies, consultants, and digital partners to provide white-label development services including SaaS platforms, AI systems, and custom applications.

Our team is reviewing your partnership request and will get back to you shortly to discuss how we can collaborate.

In the meantime, if you'd like to share more details about your agency or typical projects, feel free to reply to this email.

Looking forward to exploring a potential partnership.

Best regards,
Techflux Solutions
https://techflux.in`;

  const internalSubject = 'New Partnership Inquiry - Techflux Website';
  const internalMessage = `A new partnership inquiry has been submitted.

Lead Details:
Name: ${lead.firstName} ${lead.lastName}
Email: ${lead.email}
Company: ${lead.company}
Agency Type: ${lead.agencyType}
Services Offered: ${lead.services}
Message: ${lead.message}

Please review and schedule a partnership discussion.
Lead Source: Techflux Website - Partner Form`;

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
        templateId: TEMPLATE_PARTNER_CUSTOMER,
        fromEmail: getCustomerSenderEmail(),
        replyTo: getPrimaryInternalEmail(),
        params: {
          FirstName: lead.firstName,
          LastName: lead.lastName,
          FullName: `${lead.firstName} ${lead.lastName}`.trim(),
          Email: lead.email,
          Company: lead.company,
          AgencyType: lead.agencyType,
          Services: lead.services,
        },
      }),
      Promise.all(
        getInternalReceiverEmails().map((email) =>
          sendEmail({
            toEmail: email,
            toName: 'Techflux Team',
            subject: internalSubject,
            message: internalMessage,
            templateId: TEMPLATE_PARTNER_INTERNAL,
            replyTo: lead.email,
            params: {
              FirstName: lead.firstName,
              LastName: lead.lastName,
              FullName: `${lead.firstName} ${lead.lastName}`.trim(),
              Email: lead.email,
              Company: lead.company,
              AgencyType: lead.agencyType,
              Services: lead.services,
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