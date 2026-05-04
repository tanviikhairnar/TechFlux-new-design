type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

type PartnerFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  agencyType: string;
  services: string;
  message: string;
};

type CareerFormPayload = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  yearsOfExperience: string;
  position: string;
  portfolioUrl: string;
  coverLetter: string;
  resumeFile: File;
};

type ProjectFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

async function ensureSuccessfulResponse(response: Response) {
  if (!response.ok) {
    throw new Error('Failed to submit. Please try again.');
  }
}

export async function submitContactForm(data: ContactFormPayload) {
  const response = await fetch('https://techflux.in/contact_api.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      company: data.company,
      project_type: data.projectType,
      budget: data.budget,
      message: data.message,
    }),
  });

  await ensureSuccessfulResponse(response);
}

export async function submitPartnerForm(data: PartnerFormPayload) {
  const payload = new FormData();
  payload.append('FirstName', data.firstName);
  payload.append('LastName', data.lastName);
  payload.append('Email', data.email);
  payload.append('Company', data.company);
  payload.append('AgencyType', data.agencyType);
  payload.append('Services', data.services);
  payload.append('Message', data.message);

  const response = await fetch('https://techflux.in/partner_api.php', {
    method: 'POST',
    body: payload,
  });

  await ensureSuccessfulResponse(response);
}

export async function submitCareerForm(data: CareerFormPayload) {
  const payload = new FormData();
  payload.append('full_name', data.fullName);
  payload.append('email', data.email);
  payload.append('phone', data.phone);
  payload.append('location', data.location);
  payload.append('experience', data.yearsOfExperience);
  payload.append('position', data.position);
  payload.append('portfolio', data.portfolioUrl);
  payload.append('cover_letter', data.coverLetter);
  payload.append('resume', data.resumeFile);

  const response = await fetch('https://techflux.in/career_api.php', {
    method: 'POST',
    body: payload,
  });

  await ensureSuccessfulResponse(response);
}

export async function submitProjectForm(data: ProjectFormPayload) {
  const payload = new FormData();
  payload.append('first_name', data.firstName);
  payload.append('last_name', data.lastName);
  payload.append('email', data.email);
  payload.append('company', data.company);
  payload.append('project_type', data.projectType);
  payload.append('budget', data.budget);
  payload.append('timeline', data.timeline);
  payload.append('message', data.message);

  const response = await fetch('https://techflux.in/project_api.php', {
    method: 'POST',
    body: payload,
  });

  await ensureSuccessfulResponse(response);
}
