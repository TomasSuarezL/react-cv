import React, { Component } from "react";
import "./MyHistory.css";

/* Todo: Podria usar un Componente de Timeline para todos los items de historia, pasando un array de eventos como props. */
const MyEducation = props => {
  return (
    <div className="timeline">
      <div className="timeline-header">
        <div>
          <i className="material-icons">school</i>
        </div>
        <h3>Educación</h3>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
          <br />
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
          <div className="event-mark" />
        </div>
        <div className="event event-header">2009 - 2016</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
        </div>
        <div className="event event-titulo">
          Universidad Tecnológica Nacional (UTN)
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
        </div>
        <div className="event event-descripcion">
          Ingeniería en Sistemas de Información
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
          <br />
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
          <div className="event-mark" />
        </div>
        <div className="event event-header">2003 - 2008</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
        </div>
        <div className="event event-titulo">Instituto La Salette A-479</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
        </div>
        <div className="event event-descripcion">Tecnico en Electrónica</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
          <br />
        </div>
      </div>
    </div>
  );
};

const MyExperience = props => {
  return (
    <div className="timeline">
      <div className="timeline-header">
        <div>
          <i className="material-icons">business</i>
        </div>
        <h3>Experiencia Laboral</h3>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
          <br />
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
          <div className="event-mark" />
        </div>
        <div className="event event-header">2012 - Actualidad</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
        </div>
        <div className="event event-titulo">Club Atlético River Plate</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
        </div>
        <div className="event event-descripcion">
          Auxiliar de Sistemas - Desarrollador
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <div className="line" />
          <br />
        </div>
      </div>
    </div>
  );
};

const Project = props => {
  return (
    <a href={props.url} className="project">
      <p style={{ fontWeight: "600" }}>{props.nombre}</p>
      <p style={{ font: "300 13px 'Montserrat'" }}>{props.descripcion}</p>
    </a>
  );
};

const MyHistory = props => {
  return (
    <div className="history-projects">
      <div className="history">
        <MyExperience />
        <br />
        <MyEducation />
        <br />
      </div>
      <div className="projects-container">
        <h3>Proyectos</h3>
        <div className="projects">
          <Project
            nombre="lapo"
            descripcion="Estadisticas de Lapo BNT."
            url="https://bnt-lapo.appspot.com/"
          />
          <Project
            nombre="cryptocartera"
            descripcion="Seguidor de cartera de cryptos y otros assets."
            url="https://github.com/TomasSuarezL/cryptocartera"
          />
        </div>
      </div>
    </div>
  );
};

export default MyHistory;
