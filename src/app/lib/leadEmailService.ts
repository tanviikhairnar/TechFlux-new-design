import emailjs from '@emailjs/browser';

const INTERNAL_RECEIVER_EMAILS_RAW =
  import.meta.env.VITE_LEAD_RECEIVER_EMAIL || 'sohel@techflux.in,asrar@techflux.in,tanvikhairnar03@gmail.com';
const INTERNAL_SENDER_EMAILS_RAW =
  import.meta.env.VITE_LEAD_SENDER_EMAIL || 'sohel@techflux.in,asrar@techflux.in';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TEMPLATE_STRATEGY_CUSTOMER =
  import.meta.env.VITE_EMAILJS_TEMPLATE_STRATEGY_CUSTOMER || EMAILJS_TEMPLATE_ID;
const TEMPLATE_STRATEGY_INTERNAL =
  import.meta.env.VITE_EMAILJS_TEMPLATE_STRATEGY_INTERNAL || EMAILJS_TEMPLATE_ID;
const TEMPLATE_ESTIMATE_CUSTOMER =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ESTIMATE_CUSTOMER || EMAILJS_TEMPLATE_ID;
const TEMPLATE_ESTIMATE_INTERNAL =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ESTIMATE_INTERNAL || EMAILJS_TEMPLATE_ID;
const TEMPLATE_PARTNER_CUSTOMER =
  import.meta.env.VITE_EMAILJS_TEMPLATE_PARTNER_CUSTOMER || EMAILJS_TEMPLATE_ID;
const TEMPLATE_PARTNER_INTERNAL =
  import.meta.env.VITE_EMAILJS_TEMPLATE_PARTNER_INTERNAL || EMAILJS_TEMPLATE_ID;
const TEMPLATE_CONTACT_CUSTOMER =
  import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_CUSTOMER || EMAILJS_TEMPLATE_ID;
const TEMPLATE_CONTACT_INTERNAL =
  import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_INTERNAL || EMAILJS_TEMPLATE_ID;

type EmailPayload = {
  toEmail: string;
  toName: string;
  subject: string;
  message: string;
  templateId?: string;
  replyTo?: string;
  params?: Record<string, string>;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function looksLikeEmail(value: string | undefined) {
  return Boolean(value && isValidEmail(value));
}

function parseReceiverEmails(raw: string) {
  return raw
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
}

function getPrimaryInternalEmail() {
  return parseReceiverEmails(INTERNAL_RECEIVER_EMAILS_RAW)[0] || 'sohel@techflux.in';
}

function getInternalReceiverEmails() {
  return parseReceiverEmails(INTERNAL_RECEIVER_EMAILS_RAW);
}

function getInternalSenderEmails() {
  return parseReceiverEmails(INTERNAL_SENDER_EMAILS_RAW);
}

function assertEmailConfig() {
  const receiverEmails = getInternalReceiverEmails();
  const senderEmails = getInternalSenderEmails();
  if (!receiverEmails.length || receiverEmails.some((email) => !isValidEmail(email))) {
    throw new Error(
      'Invalid receiver email. Use real mailbox addresses like sohel@techflux.in,asrar@techflux.in,tanvikhairnar03@gmail.com.',
    );
  }
  if (!senderEmails.length || senderEmails.some((email) => !isValidEmail(email))) {
    throw new Error(
      'Invalid sender email. Use real mailbox addresses like sohel@techflux.in,asrar@techflux.in.',
    );
  }

  if (
    looksLikeEmail(EMAILJS_SERVICE_ID) ||
    looksLikeEmail(EMAILJS_TEMPLATE_ID) ||
    looksLikeEmail(EMAILJS_PUBLIC_KEY)
  ) {
    throw new Error(
      'Invalid EmailJS config: SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY must be EmailJS values (not an email address).',
    );
  }

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS_NOT_CONFIGURED');
  }
}

function canUseEmailJs() {
  const receiverEmails = getInternalReceiverEmails();
  const senderEmails = getInternalSenderEmails();
  const validReceivers = receiverEmails.length > 0 && receiverEmails.every((email) => isValidEmail(email));
  const validSenders = senderEmails.length > 0 && senderEmails.every((email) => isValidEmail(email));
  const invalidEmailJsValues =
    looksLikeEmail(EMAILJS_SERVICE_ID) ||
    looksLikeEmail(EMAILJS_TEMPLATE_ID) ||
    looksLikeEmail(EMAILJS_PUBLIC_KEY);

  return (
    validReceivers &&
    validSenders &&
    !invalidEmailJsValues &&
    Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY)
  );
}

function isEmailJsDeliveryError(error: unknown) {
  if (!(error instanceof Error)) return false;
  return error.message.startsWith('EmailJS error') || error.message === 'EmailJS request failed.';
}

function sendEmail(payload: EmailPayload) {
  assertEmailConfig();
  const senderEmails = getInternalSenderEmails();
  const primarySender = senderEmails[0] || getPrimaryInternalEmail();

  return emailjs
    .send(
      EMAILJS_SERVICE_ID,
      payload.templateId || EMAILJS_TEMPLATE_ID,
      {
        to: payload.toEmail,
        email: payload.toEmail,
        to_email: payload.toEmail,
        user_email: payload.toEmail,
        customer_email: payload.toEmail,
        receiver_email: payload.toEmail,
        toEmail: payload.toEmail,
        to_name: payload.toName,
        receiver_name: payload.toName,
        toName: payload.toName,
        subject: payload.subject,
        email_subject: payload.subject,
        message: payload.message,
        email_message: payload.message,
        from_email: primarySender,
        from_name: 'Techflux Solutions',
        sender_emails: senderEmails.join(', '),
        reply_to: payload.replyTo || getPrimaryInternalEmail(),
        ...(payload.params || {}),
      },
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      },
    )
    .catch((error: unknown) => {
      const status = typeof error === 'object' && error !== null ? (error as { status?: number }).status : undefined;
      const text = typeof error === 'object' && error !== null ? (error as { text?: string }).text : undefined;
      throw new Error(status ? `EmailJS error ${status}: ${text || 'Request failed'}` : 'EmailJS request failed.');
    });
}

function sendInternalEmails(subject: string, message: string, replyTo: string) {
  const internalEmails = getInternalReceiverEmails();
  return Promise.all(
    internalEmails.map((email) =>
      sendEmail({
        toEmail: email,
        toName: 'Techflux Team',
        subject,
        message,
        replyTo,
      }),
    ),
  );
}

type StrategyCallLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

type EstimateLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

type PartnerLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  agencyType: string;
  services: string;
  message: string;
};

type ContactLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

export type LeadEmailDelivery = 'emailjs';

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

  const internalSubject = 'New Strategy Call Lead - TechFlux Website';
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
    throw new Error(
      'Direct email is not configured. Set EmailJS env keys and restart the app.',
    );
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        templateId: TEMPLATE_STRATEGY_CUSTOMER,
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

  const internalSubject = 'New Project Estimate Request - TechFlux Website';
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
Lead Source: TechFlux Website - Project Estimate Form`;

  if (!canUseEmailJs()) {
    throw new Error(
      'Direct email is not configured. Set EmailJS env keys and restart the app.',
    );
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        templateId: TEMPLATE_ESTIMATE_CUSTOMER,
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
Lead Source: TechFlux Website - Partner Form`;

  if (!canUseEmailJs()) {
    throw new Error(
      'Direct email is not configured. Set EmailJS env keys and restart the app.',
    );
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        templateId: TEMPLATE_PARTNER_CUSTOMER,
        replyTo: getPrimaryInternalEmail(),
        params: {
          first_name: lead.firstName,
          last_name: lead.lastName,
          FirstName: lead.firstName,
          LastName: lead.lastName,
          Email: lead.email,
          Company: lead.company,
          AgencyType: lead.agencyType,
          Services: lead.services,
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
            templateId: TEMPLATE_PARTNER_INTERNAL,
            replyTo: lead.email,
            params: {
              first_name: lead.firstName,
              last_name: lead.lastName,
              FirstName: lead.firstName,
              LastName: lead.lastName,
              Email: lead.email,
              Company: lead.company,
              AgencyType: lead.agencyType,
              Services: lead.services,
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

  const internalSubject = 'New Contact Form Inquiry - TechFlux Website';
  const internalMessage = `A new contact form inquiry has been submitted.

Lead Details:
Name: ${lead.firstName} ${lead.lastName}
Email: ${lead.email}
Company: ${lead.company}
Project Type: ${lead.projectType}
Budget: ${lead.budget}
Message: ${lead.message}

Please review and respond within 24 hours.
Lead Source: TechFlux Website - Contact Form`;

  if (!canUseEmailJs()) {
    throw new Error(
      'Direct email is not configured. Set EmailJS env keys and restart the app.',
    );
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        templateId: TEMPLATE_CONTACT_CUSTOMER,
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
            templateId: TEMPLATE_CONTACT_INTERNAL,
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
