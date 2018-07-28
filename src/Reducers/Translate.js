import { TOGGLE_LANG } from "../Actions/Translate";

const spanish = {
  id: "ESP",
  title: "Ingeniero en Sistemas de Informacion",
  language: "Lenguaje",
  aboutMeTitle: "Acerca Mío",
  aboutMe:
    "Ingeniero con ganas de aprender y mejorar?, superar nuevos desafios que me permitan lograrlo? Resolucion de problemas?"
};

const english = {
  id: "ENG",
  title: "Software Engineer",
  language: "Language",
  aboutMeTitle: "About Me",
  aboutMe:
    "Ingeniero con ganas de aprender y mejorar?, superar nuevos desafios que me permitan lograrlo? Resolucion de problemas?"
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
