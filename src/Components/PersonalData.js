import React from "react";
import "./PersonalData.css";
import Skill from "./Skill";

const PersonalData = props => {
  return (
    <div className={"personal-data personal-data-div" + props.collapse}>
      <div className="portrait-name">
        <div className="portrait" />
        <div style={{ backgroundColor: "#5c98b1", width: "0.35rem" }} />
        <div style={{ backgroundColor: "#ececec", width: "0.35rem" }} />
        <div style={{ backgroundColor: "#5c98b1", width: "0.35rem" }} />
        <div className="name">
          <h1>
            {props.nombre + " "}
            <strong>{props.apellido.toUpperCase()}</strong>
          </h1>
          <p>{props.title}</p>
          <div>
            <i className="fas fa-map-marker-alt fa-lg" />Buenos Aires, Argentina
          </div>
        </div>
      </div>
      <div className="personal-data-languages container">
        <p>{props.languagesTitle}</p>
        <div className="languages">
          <Skill
            skillName={props.spanish}
            skillPoints={5}
            skillColor="#84a98c"
          />
          <Skill
            skillName={props.english}
            skillPoints={3}
            skillColor="#84a98c"
          />
        </div>
      </div>
      <div className="contacto personal-data-section container">
        <h3>
          <i
            style={{ marginRight: "16px" }}
            className="far fa-address-card fa-sm"
          />
          {props.contactoTitle}
        </h3>
        <div className="contacto-container">
          <div className="contacto-field">
            <i className="far fa-envelope fa-2x" />
            <a href="https://github.com/TomasSuarezL">tomas.sl@hotmail.com</a>
          </div>
          <div className="contacto-field">
            <i className="fas fa-phone fa-2x" />
            <a style={{ pointerEvents: "none", cursor: "default" }} href="">
              +54 11 31104987{" "}
            </a>
          </div>
          <div className="contacto-field">
            <i className="fab fa-linkedin fa-2x" />
            <a href="https://www.linkedin.com/in/tomas-suarez-lissi-62a180147/">
              Tomás Suarez Lissi
            </a>
          </div>

          <div className="contacto-field">
            <i className="fab fa-github fa-2x" />
            <a href="https://github.com/TomasSuarezL">TomasSuarezL</a>
          </div>
          <div className="contacto-field">
            <i className="fab fa-free-code-camp fa-2x" />
            <a href="https://www.freecodecamp.org/tomassuarezl">
              @tomassuarezl
            </a>
          </div>
          <div className="contacto-field">
            <i className="fab fa-codepen fa-2x" />
            <a href="https://codepen.io/TomasSL/">@TomasSL</a>
          </div>
        </div>
      </div>
      <div className="personal-data-section about-me container">
        <h3>
          <i style={{ marginRight: "16px" }} className="far fa-user fa-sm" />
          {props.aboutMeTitle}
        </h3>
        <p style={{ margin: "8px", font: "300 14px 'Montserrat'" }}>
          {props.aboutMe}
        </p>
      </div>
    </div>
  );
};

export default PersonalData;
