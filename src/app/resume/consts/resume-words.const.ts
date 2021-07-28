import { IWords } from 'src/app/core/interfaces';
import { IResumeWord } from '../interfaces';

const ResumeWordsEs: IResumeWord = {
  // Nav
  HOME: 'Inicio',
  WORKS: 'Trabajos',
  CONTACT: 'Contacto',
  ABOUT: 'Acerca de',
  // Home
  HELLO: 'Hola',
  I_AM: 'Soy',
  RESUME: 'Ingneiero en Sistemas de Información, egresado de la Universidad Tecnológica Nacional - Facultad Regional Córdoba.',
  // Contact
  GET_IN_TOUCH: 'Ponte en contacto',
  PHONE: 'Telefono',
  EMAIL_ADDRESS: 'Direccion de correo',
  LOCATION: 'Ubicacion',
  YOUR_NAME: 'Tu nombre',
  SUBJECT: 'Asunto',
  MESSAGE: 'Mensaje',
  SUBMIT_MESSAGE: 'Enviar mensaje',
  REGARDS: 'Saludos',
  // Work
  WORK_EXPERIENCE: 'Experiencia Laboral',
  PRESENT: 'Presente',
  WORKS_LIST: [
    {
      NAME: 'Full Stack Engineer',
      COMPANY: 'Rocket Insights (part of Dept)',
      DESCRIPTION: ``,
      FINISHED_AT: '',
      STARTED_AT: 'Jul. 2021',
      TECHNOLOGIES: [
        `Front-End: Angular`,
        'Back-End: C# .NET Core',
        'Database: SQL Server.'
      ]
    },
    {
      NAME: 'Full Stack Engineer',
      COMPANY: 'Self-Employed',
      DESCRIPTION: `Desarrollo de aplicaciones que proveen solución a la administración de escuelas,
      aulas virtuales y reportes.<br>
      Mis responsabilidades son desarrollo, revisión de código, unit testing y análisis de performance.
      A cargo de la arquitectura front-end.`,
      FINISHED_AT: '',
      STARTED_AT: 'Abr. 2018',
      TECHNOLOGIES: [
        `Front-End: Angular, Angular Material, responsiveness con Flexbox, RxJS en el front end.
        Karma y Jasmine para unit testing.`,
        'Back-End: C#, WebApi2, .Net, Entity Framework.',
        'Elasticsearch para logging.',
        'Base de datos: SQL Server.'
      ]
    },
    {
      NAME: 'Front-End Software Designer',
      COMPANY: 'Overactive',
      DESCRIPTION: `Desarrollo de aplicaciones empresariales para XPO Logistics (principal competidor de Fedex).<br>
      Lider tecnico front-end (off-site) a cargo de son desarrollo, revisión de código, unit testing, análisis de performance y despliegue.
      .<br>
      Trabaje onsite por 2 months como lider tecnico - Oregon (United States).`,
      FINISHED_AT: 'Jul. 2021',
      STARTED_AT: 'Feb. 2019',
      TECHNOLOGIES: [
        `Angular, Angular Material, responsiveness with Flexbox, RxJS in the front end. Karma and
        Jasmine for unit testing.`,
        'Teamcity for deployments.',
        'Elasticsearch and GCP for logging.',
        'Oracle as database.'
      ]
    },
    {
      NAME: 'Full Stack Developer',
      COMPANY: 'Sanatorio Allende S.A.',
      DESCRIPTION: `Desarrollo de aplicaciones internan para la asistencia médica, administración
      y reportes. Tambien desarrollo de una aplicación externa para agendar turnos y ver historial médico.<br>
      Estuve a cargo de la arquitectura del front-end y fui el líder técnico de AngularJS/Angular.
      Capacitaciones para nuevos miembros y miembros interesados en aprender Angular.<br>
      Proyectos: Admisión de pacientes, Administración de Pacientes, Administración de Habitaciones,
      Sistema de Autenticación Única.`,
      FINISHED_AT: 'Feb. 2019',
      STARTED_AT: 'May. 2015',
      TECHNOLOGIES: [
        `Front-End: AngularJS con TS, Angular (5, 6, 7), HTML5, CSS3 (SASS). Karma y Jasmine para
        unit testing.`,
        'Back-End: C#, WebApi2, .Net, Entity Framework.',
        'Bases de datos: Informix, SQL Server, MariaDB',
      ]
    },
    {
      NAME: 'SysAdmin',
      COMPANY: 'Sanatorio Allende S.A.',
      DESCRIPTION: `Administración de redes (DNS, DHCP), administración de archivos y mails.
      Mantenimiento de hardware.`,
      FINISHED_AT: '2015',
      STARTED_AT: '2012',
      TECHNOLOGIES: []
    }
  ],
  // about
  PROFILE: 'Perfil',
  PROFILE_CONTENT: `Ingeniero en sistemas innovador y comprometido. Más de 6 años de experiencia trabajando con
  equipos multidisciplinarios y tecnologías construyendo soluciones empresariales para el sector privado.<br>
  Proveo de experiencia y servicios en todos los niveles de ejecución, asumiendo grandes responsabilidades para
  su despliegue.`,
  CAREER_PATH: 'Carrera',
  CAREER_PATH_CONTENT: `He desarrollado los roles de desarrollador y líder técnico para varios proyectos,
  donde se realizaron tareas de diseño y desarrollo agregando valor a las soluciones de software.
  <br>
  La mayoría de los proyectos fueron dedicados al cuidado de la salud.`,
  PERSONAL_STRENGTH: 'Fortalezas Personales',
  PERSONAL_STRENGTH_CONTENT: `Soy una persona muy proactiva con constantes ganas de aprender.
  Me gusta trabajar en equipos por la sinergia que se produce en ellos.
  Tengo habilidades y conocimientos esenciales para la resolución de problemas.`,
  PROFESSIONAL_SKILLS: 'Habilidades Profesionales',
  PROFESSIONAL_SKILLS_CONTENT: `● Ingeniería de software, análisis y desarrollo de sistemas de información.<br>
  ● Experiencia en sistemas de integración.<br>
  ● Administración de base de datos SQL.<br>
  ● Control de calidad de procesos.`,
};

const ResumeWordsEn: IResumeWord = {
  // Nav
  HOME: 'Home',
  WORKS: 'Jobs',
  CONTACT: 'Contact',
  ABOUT: 'About',
  // Home
  HELLO: 'Hello',
  I_AM: 'I am',
  RESUME: `A System Information Engineer graduated at Universidad Tecnológica Nacional - Facultad Regional Córdoba.
  (National Technology University).`,
  // Contact
  GET_IN_TOUCH: 'Get in touch',
  PHONE: 'Phone',
  EMAIL_ADDRESS: 'Email address',
  LOCATION: 'Location',
  YOUR_NAME: 'Your name',
  SUBJECT: 'Subject',
  MESSAGE: 'Message',
  SUBMIT_MESSAGE: 'Submit Message',
  REGARDS: 'Regards',
  // Work
  WORK_EXPERIENCE: 'Work Experience',
  PRESENT: 'Present',
  WORKS_LIST: [
    {
      NAME: 'Full Stack Engineer',
      COMPANY: 'Rocket Insights (part of Dept)',
      DESCRIPTION: ``,
      FINISHED_AT: '',
      STARTED_AT: 'Jul. 2021',
      TECHNOLOGIES: [
        `Front-End: Angular`,
        'Back-End: C# .NET Core',
        'Database: SQL Server.'
      ]
    },
    {
      NAME: 'Full Stack Engineer',
      COMPANY: 'Self-Employed',
      DESCRIPTION: `Development of applications that provide solutions for school administration, virtual
      classrooms, and reports.<br>
      My responsibilities are developing, coding review, unit testing, and performance analysis.
      Also, I am in charge of front-end architecture.`,
      FINISHED_AT: '',
      STARTED_AT: 'Abr. 2018',
      TECHNOLOGIES: [
        `Front-End: Angular, Angular Material, responsiveness with Flexbox, RxJS in the front end.
        Karma and Jasmine for unit testing.`,
        'Back-End: C#, WebApi2, .Net, Entity Framework.',
        'Elasticsearch for logging.',
        'Database: SQL Server.'
      ]
    },
    {
      NAME: 'Front-End Software Designer',
      COMPANY: 'Overactive',
      DESCRIPTION: `Development of enterprise applications for XPO Logistics (Fedex main competitor).<br>
      Offsite Frontend Tech Lead, in charge of developing, coding review, unit testing, performance analysis, deployments.
      .<br>
      Worked onsite for 2 months as offshore technical leader - Oregon (United States).`,
      FINISHED_AT: 'Jul. 2021',
      STARTED_AT: 'Feb. 2019',
      TECHNOLOGIES: [
        `Angular, Angular Material, responsiveness with Flexbox, RxJS in the front end. Karma and
        Jasmine for unit testing.`,
        'Teamcity for deployments.',
        'Elasticsearch and GCP for logging.',
        'Oracle as database.'
      ]
    },
    {
      NAME: 'Full Stack Developer',
      COMPANY: 'Sanatorio Allende S.A.',
      DESCRIPTION: `Development of internal applications that provide solutions for medical assistance,
      administration and reports. Also an external application where patients can schedule
      medical care and see medical records.<br>
      Was in charge of front-end architecture and I was an AngularJS and Angular technical leader.
      Couching and mentoring.<br>
      Projects: Patient Admission, Patient Administration, Rooms Administration, Single Auth
      System.`,
      FINISHED_AT: 'Feb. 2019',
      STARTED_AT: 'May. 2015',
      TECHNOLOGIES: [
        `Front-End: AngularJS with TS, Angular (5, 6, 7), HTML5, CSS3 (SASS). Karma and Jasmine for
        unit testing.`,
        'Back-End: C#, WebApi2, .Net, Entity Framework.',
        'Databases: Informix, SQL Server, MariaDB',
      ]
    },
    {
      NAME: 'SysAdmin',
      COMPANY: 'Sanatorio Allende S.A.',
      DESCRIPTION: `Network administrator (DNS, DHCP), storage administrator and postmaster administrator.
      Hardware maintenance.`,
      FINISHED_AT: '2015',
      STARTED_AT: '2012',
      TECHNOLOGIES: []
    }
  ],
  // about
  PROFILE: 'Profile',
  PROFILE_CONTENT: `Accomplished innovative System Engineer with more than 6-years-experience working with
  multidisciplinary teams and technologies building enterprise solutions for private sectors.<br>
  Provide expertise and services at all levels of execution, assuming high levels of responsibility
  for their delivery.`,
  CAREER_PATH: 'Career Path',
  CAREER_PATH_CONTENT: `I have performed the roles of Software Developer and Technical Lead for numerous projects
  requiring the execution of all aspects of design and development of new value added to
  software solutions. Most of the projects where related to health care.`,
  PERSONAL_STRENGTH: 'Personal Strength',
  PERSONAL_STRENGTH_CONTENT: `I have a really proactive and learning spirit. I like working in groups because the sinergy in
  them.<br>
  I have skills and knowledge essential for solving problems and improvements.`,
  PROFESSIONAL_SKILLS: 'Professional Skills',
  PROFESSIONAL_SKILLS_CONTENT: `● Software engineering, analysis and development of information systems.<br>
  ● Integration systems expertise.<br>
  ● SQL and database management and administration.<br>
  ● Quality control process.`,
};

export const ResumeWords: IWords<IResumeWord> = {
  es: ResumeWordsEs,
  en: ResumeWordsEn,
};
