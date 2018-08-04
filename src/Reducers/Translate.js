import { TOGGLE_LANG } from "../Actions/Translate";

const spanish = {
  id: "ESP",
  title: "Ingeniero en Sistemas de Información",
  language: "Lenguaje",
  english: "Inglés",
  spanish: "Español",
  contactoTitle: "Contacto",
  aboutMeTitle: "Acerca de Mí",
  aboutMe:
    "Soy un ingeniero en sistemas de información con un verdadero interés por resolver problemas, intentando mejorar constantemente mis herramientas para lograrlo. Siempre buscando aprender.",
  experienceTitle: "Experiencia Laboral",
  present: "Actualidad",
  workPosition: "Auxiliar de Sistemas - Desarrollador",
  educationTitle: "Educación",
  engineeringTitle: "Ingeniería en Sistemas de Información",
  technicianTitle: "Técnico en Electrónica",
  coursesTitle: "Cursos y Certificados",
  projectsTitle: "Proyectos",
  hobbiesTitle: "Intereses y Hobbies",
  hobbieDrums: "Batería",
  hobbieReading: "Lectura",
  hobbieFootball: "Fútbol",
  hobbieTravel: "Viajar",
  hobbieScience: "Ciencia",
  hobbieFinance: "Finanzas"
};

const english = {
  id: "ENG",
  title: "Software Engineer",
  language: "Language",
  english: "English",
  spanish: "Spanish",
  contactoTitle: "Contact",
  aboutMeTitle: "About Me",
  aboutMe:
    "I´m a Software Engineer with a special interest in problem solving, trying to improve constantly to achieve better results. Always trying to learn something new.",
  experienceTitle: "Work Experience",
  present: "Present",
  workPosition: "Help Desk - Developer",
  educationTitle: "Education",
  technicianTitle: "Electronics Technician",
  engineeringTitle: "Software Engineering",
  coursesTitle: "Courses & Certificates",
  projectsTitle: "Projects",
  hobbiesTitle: "Interests & Hobbies",
  hobbieDrums: "Drums",
  hobbieReading: "Reading",
  hobbieFootball: "Football",
  hobbieTravel: "Travel",
  hobbieScience: "Science",
  hobbieFinance: "Finance"
};

export const translateReducer = (state = english, action) => {
  switch (action.type) {
    case TOGGLE_LANG:
      return state.id == "ENG" ? { ...spanish } : { ...english };
      break;

    default:
      return state;
      break;
  }
};

export default translateReducer;
