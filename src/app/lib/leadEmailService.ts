import emailjs from '@emailjs/browser';

const INTERNAL_RECEIVER_EMAILS_RAW =
  import.meta.env.VITE_LEAD_RECEIVER_EMAIL || 'Sohel@techflux.in,Asrar@techflux.in,tanvikhairnar03@gmail.com';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type EmailPayload = {
  toEmail: string;
  toName: string;
  subject: string;
  message: string;
  replyTo?: string;
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
  return parseReceiverEmails(INTERNAL_RECEIVER_EMAILS_RAW)[0] || 'Sohel@techflux.in';
}

function getInternalReceiverEmails() {
  return parseReceiverEmails(INTERNAL_RECEIVER_EMAILS_RAW);
}

function assertEmailConfig() {
  const receiverEmails = getInternalReceiverEmails();
  if (!receiverEmails.length || receiverEmails.some((email) => !isValidEmail(email))) {
    throw new Error(
      'Invalid receiver email. Use real mailbox addresses like Sohel@techflux.in,Asrar@techflux.in,tanvikhairnar03@gmail.com.',
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
  const validReceivers = receiverEmails.length > 0 && receiverEmails.every((email) => isValidEmail(email));
  const invalidEmailJsValues =
    looksLikeEmail(EMAILJS_SERVICE_ID) ||
    looksLikeEmail(EMAILJS_TEMPLATE_ID) ||
    looksLikeEmail(EMAILJS_PUBLIC_KEY);

  return (
    validReceivers &&
    !invalidEmailJsValues &&
    Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY)
  );
}

async function openMailClientFallback(subject: string, internalMessage: string, leadEmail: string, leadName: string) {
  if (typeof window === 'undefined') return;
  const to = getInternalReceiverEmails().join(',');
  const body = `${internalMessage}\n\nReply-To: ${leadEmail}\nLead Name: ${leadName}`;
  const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
}

function isEmailJsDeliveryError(error: unknown) {
  if (!(error instanceof Error)) return false;
  return error.message.startsWith('EmailJS error') || error.message === 'EmailJS request failed.';
}

function sendEmail(payload: EmailPayload) {
  assertEmailConfig();

  return emailjs
    .send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: payload.toEmail,
        to_name: payload.toName,
        subject: payload.subject,
        message: payload.message,
        reply_to: payload.replyTo || getPrimaryInternalEmail(),
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

export type LeadEmailDelivery = 'emailjs' | 'mailto';

export async function sendStrategyCallEmails(lead: StrategyCallLead): Promise<LeadEmailDelivery> {
  const customerSubject = 'Your Strategy Call Request Received - Techflux Solutions';
  const customerMessage = `Hi ${lead.firstName},

Thank you for reaching out to Techflux Solutions.

We have received your request to schedule a strategy call with our team. One of our specialists will review your project details and get back to you shortly to confirm the meeting.

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
    await openMailClientFallback(
      internalSubject,
      internalMessage,
      lead.email,
      `${lead.firstName} ${lead.lastName}`.trim(),
    );
    return 'mailto';
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        replyTo: getPrimaryInternalEmail(),
      }),
      sendInternalEmails(internalSubject, internalMessage, lead.email),
    ]);
    return 'emailjs';
  } catch (error) {
    if (!isEmailJsDeliveryError(error)) throw error;
    await openMailClientFallback(
      internalSubject,
      internalMessage,
      lead.email,
      `${lead.firstName} ${lead.lastName}`.trim(),
    );
    return 'mailto';
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
    await openMailClientFallback(
      internalSubject,
      internalMessage,
      lead.email,
      `${lead.firstName} ${lead.lastName}`.trim(),
    );
    return 'mailto';
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        replyTo: getPrimaryInternalEmail(),
      }),
      sendInternalEmails(internalSubject, internalMessage, lead.email),
    ]);
    return 'emailjs';
  } catch (error) {
    if (!isEmailJsDeliveryError(error)) throw error;
    await openMailClientFallback(
      internalSubject,
      internalMessage,
      lead.email,
      `${lead.firstName} ${lead.lastName}`.trim(),
    );
    return 'mailto';
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
    await openMailClientFallback(
      internalSubject,
      internalMessage,
      lead.email,
      `${lead.firstName} ${lead.lastName}`.trim(),
    );
    return 'mailto';
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        replyTo: getPrimaryInternalEmail(),
      }),
      sendInternalEmails(internalSubject, internalMessage, lead.email),
    ]);
    return 'emailjs';
  } catch (error) {
    if (!isEmailJsDeliveryError(error)) throw error;
    await openMailClientFallback(
      internalSubject,
      internalMessage,
      lead.email,
      `${lead.firstName} ${lead.lastName}`.trim(),
    );
    return 'mailto';
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
    await openMailClientFallback(
      internalSubject,
      internalMessage,
      lead.email,
      `${lead.firstName} ${lead.lastName}`.trim(),
    );
    return 'mailto';
  }

  try {
    await Promise.all([
      sendEmail({
        toEmail: lead.email,
        toName: lead.firstName,
        subject: customerSubject,
        message: customerMessage,
        replyTo: getPrimaryInternalEmail(),
      }),
      sendInternalEmails(internalSubject, internalMessage, lead.email),
    ]);
    return 'emailjs';
  } catch (error) {
    if (!isEmailJsDeliveryError(error)) throw error;
    await openMailClientFallback(
      internalSubject,
      internalMessage,
      lead.email,
      `${lead.firstName} ${lead.lastName}`.trim(),
    );
    return 'mailto';
  }
}
