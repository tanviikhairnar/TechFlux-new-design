import emailjs from '@emailjs/browser';

type EmailPayload = {
  toEmail: string;
  toName: string;
  subject: string;
  message: string;
  templateId?: string;
  replyTo?: string;
  fromEmail?: string;
  params?: Record<string, string>;
};

const INTERNAL_RECEIVER_EMAILS_RAW =
  import.meta.env.VITE_LEAD_RECEIVER_EMAIL || 'sohel@techflux.in,asrar@techflux.in,tanvikhairnar03@gmail.com';
const INTERNAL_SENDER_EMAILS_RAW =
  import.meta.env.VITE_LEAD_SENDER_EMAIL || 'sohel@techflux.in,asrar@techflux.in';
const CUSTOMER_SENDER_EMAIL = import.meta.env.VITE_CUSTOMER_SENDER_EMAIL || 'sales@techflux.in';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function looksLikeEmail(value: string | undefined) {
  return Boolean(value && isValidEmail(value));
}

function parseEmails(raw: string) {
  return raw
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
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

  if (!isValidEmail(CUSTOMER_SENDER_EMAIL)) {
    throw new Error('Invalid customer sender email. Use a real mailbox address like sales@techflux.in.');
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

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function canUseEmailJs() {
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

export function isEmailJsDeliveryError(error: unknown) {
  if (!(error instanceof Error)) return false;
  return error.message.startsWith('EmailJS error') || error.message === 'EmailJS request failed.';
}

export function getPrimaryInternalEmail() {
  return getInternalReceiverEmails()[0] || 'sohel@techflux.in';
}

export function getInternalReceiverEmails() {
  return parseEmails(INTERNAL_RECEIVER_EMAILS_RAW);
}

export function getCustomerSenderEmail() {
  return CUSTOMER_SENDER_EMAIL;
}

export function getDefaultTemplateId() {
  return EMAILJS_TEMPLATE_ID;
}

export function sendEmail(payload: EmailPayload) {
  assertEmailConfig();
  const senderEmails = getInternalSenderEmails();
  const primarySender = payload.fromEmail || senderEmails[0] || getPrimaryInternalEmail();

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

function getInternalSenderEmails() {
  return parseEmails(INTERNAL_SENDER_EMAILS_RAW);
}
