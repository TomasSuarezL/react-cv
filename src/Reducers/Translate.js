import { TOGGLE_LANG } from "../Actions/Translate";

const spanish = {
  id: "ESP",
  title: "Ingeniero en Sistemas de Informacion",
  language: "Lenguaje"
};

const english = {
  id: "ENG",
  title: "Software Engineer",
  language: "Language"
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
