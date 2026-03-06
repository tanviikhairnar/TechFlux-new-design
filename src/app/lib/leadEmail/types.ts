export type LeadEmailDelivery = 'emailjs';

export type StrategyCallLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

export type EstimateLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

export type PartnerLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  agencyType: string;
  services: string;
  message: string;
};

export type ContactLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

export type CareerApplicationLead = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  yearsOfExperience: string;
  position: string;
  portfolioUrl: string;
  coverLetter: string;
  resumeFileName: string;
};
