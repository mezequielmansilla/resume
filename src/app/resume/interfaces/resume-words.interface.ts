export interface IResumeWord {
  // nav
  HOME: string;
  WORKS: string;
  CONTACT: string;
  ABOUT: string;
  // home
  HELLO: string;
  I_AM: string;
  RESUME: string;
  // contact
  GET_IN_TOUCH: string;
  PHONE: string;
  EMAIL_ADDRESS: string;
  LOCATION: string;
  YOUR_NAME: string;
  SUBJECT: string;
  MESSAGE: string;
  SUBMIT_MESSAGE: string;
  REGARDS: string;
  // work
  WORK_EXPERIENCE: string;
  PRESENT: string;
  WORKS_LIST: IWorkResume[];
  // about
  PROFILE: string;
  PROFILE_CONTENT: string;
  CAREER_PATH: string;
  CAREER_PATH_CONTENT: string;
  PERSONAL_STRENGTH: string;
  PERSONAL_STRENGTH_CONTENT: string;
  PROFESSIONAL_SKILLS: string;
  PROFESSIONAL_SKILLS_CONTENT: string;
}
interface IWorkResume {
  NAME: string;
  COMPANY: string;
  DESCRIPTION: string;
  TECHNOLOGIES: string[];
  STARTED_AT: string;
  FINISHED_AT: string;
}
