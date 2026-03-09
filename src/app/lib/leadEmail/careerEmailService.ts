import { canUseEmailJs, isEmailJsDeliveryError, isValidEmail, sendEmail } from './sharedEmailClient';
import { CareerApplicationLead, LeadEmailDelivery } from './types';

const CAREER_RECEIVER_EMAIL = import.meta.env.VITE_CAREER_RECEIVER_EMAIL || 'hr@techflux.in';

export async function sendCareerApplicationEmail(lead: CareerApplicationLead): Promise<LeadEmailDelivery> {
  const internalSubject = `New Career Application - ${lead.position}`;
  const internalMessage = `A new career application has been submitted.

Applicant Details:
Full Name: ${lead.fullName}
Email: ${lead.email}
Phone: ${lead.phone}
Location: ${lead.location}
Years of Experience: ${lead.yearsOfExperience}
Position Applied For: ${lead.position}
Portfolio/GitHub: ${lead.portfolioUrl || 'N/A'}
Resume File: ${lead.resumeFileName}
Cover Letter: ${lead.coverLetter || 'N/A'}

Lead Source: Techflux Website - Career Apply Form`;

  if (!canUseEmailJs()) {
    throw new Error('Direct email is not configured. Set EmailJS env keys and restart the app.');
  }

  if (!isValidEmail(CAREER_RECEIVER_EMAIL)) {
    throw new Error('Invalid career receiver email. Use a real mailbox address like hr@techflux.in.');
  }

  try {
    await sendEmail({
      toEmail: CAREER_RECEIVER_EMAIL,
      toName: 'HR Team',
      subject: internalSubject,
      message: internalMessage,
      replyTo: lead.email,
      params: {
        FullName: lead.fullName,
        Email: lead.email,
        Phone: lead.phone,
        Location: lead.location,
        YearsOfExperience: lead.yearsOfExperience,
        Position: lead.position,
        Portfolio: lead.portfolioUrl || 'N/A',
        ResumeFileName: lead.resumeFileName,
        CoverLetter: lead.coverLetter || 'N/A',
      },
    });

    return 'emailjs';
  } catch (error) {
    if (!isEmailJsDeliveryError(error)) throw error;
    throw error;
  }
}
