import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./MyHistory.css";
import PythonLogo from "../Static/Techs/Python.svg";
import FlaskLogo from "../Static/Techs/flask-logo.png";
import HTMLLogo from "../Static/Techs/HTML.svg";
import JQueryLogo from "../Static/Techs/jquery-original.svg";
import SassLogo from "../Static/Techs/Sass.svg";
import PostgresLogo from "../Static/Techs/Postgresql.svg";
import d3Logo from "../Static/Techs/d3.png";
import ReactLogo from "../Static/Techs/React.svg";
import ReduxLogo from "../Static/Techs/Redux.svg";
import AndroidLogo from "../Static/Techs/Android.svg";

const mapStateToProps = state => {
  return {
    experience: {
      experienceTitle: state.experienceTitle,
      present: state.present,
      workPosition: state.workPosition
    },
    education: {
      educationTitle: state.educationTitle,
      engineeringTitle: state.engineeringTitle,
      technicianTitle: state.technicianTitle
    },
    courses: {
      coursesTitle: state.coursesTitle
    },
    projectTitle: state.projectsTitle
  };
};

/* Todo: Podria usar un Componente de Timeline para todos los items de historia, pasando un array de eventos como props. */
const MyEducation = props => {
  return (
    <div className="timeline">
      <div className="timeline-header">
        <div>
          <i class="fa fa-graduation-cap fa-lg" />
        </div>
        <h3>{props.educationTitle}</h3>
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
        <div className="event event-descripcion">{props.engineeringTitle}</div>
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
        <div className="event event-descripcion">{props.technicianTitle}</div>
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
          <i class="fa fa-briefcase fa-lg" />
        </div>
        <h3>{props.experienceTitle}</h3>
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
        <div className="event event-header">2012 - {props.present}</div>
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
        <div className="event event-descripcion">{props.workPosition}</div>
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

const MyCourses = props => {
  return (
    <div className="timeline">
      <div className="timeline-header">
        <div>
          <i class="fa fa-certificate fa-lg" />
        </div>
        <h3>{props.coursesTitle}</h3>
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
    </div>
  );
};

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }
  render() {
    const backLogos = this.props.stackBe.map(val => <img src={val} />);
    const frontLogos = this.props.stackFe.map(val => <img src={val} />);

    return (
      <a
        href={this.props.url}
        className="project"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <CSSTransition
          in={this.state.hovered}
          timeout={200}
          classNames="project"
        >
          {this.state.hovered ? (
            <div className="project-hover">
              <p style={{ marginBottom: "4px", fontWeight: "300" }}>Stack</p>
              <div className="project-stack">
                <p>FrontEnd:</p>
                {frontLogos}
              </div>
              <div className="project-stack">
                <p>BackEnd:</p>
                {backLogos}
              </div>
            </div>
          ) : (
            <div className="project-main">
              <p style={{ margin: "16px", fontWeight: "600" }}>
                {this.props.nombre}
              </p>
              <p style={{ margin: "16px", font: "300 13px 'Montserrat'" }}>
                {this.props.descripcion}
              </p>
            </div>
          )}
        </CSSTransition>
      </a>
    );
  }
}

const MyHistory = props => {
  return (
    <div className="history-projects">
      <div className="history container">
        <MyExperience {...props.experience} />
        <br />
        <MyEducation {...props.education} />
        <br />
        <MyCourses {...props.courses} />
        <br />
      </div>
      <div className="projects-container container">
        <h3>
          <i style={{ marginRight: "16px" }} class="fa fa-edit fa-sm" />
          {props.projectTitle}
        </h3>
        <div className="projects">
          <Project
            nombre="lapo"
            descripcion="Estadisticas de Lapo BNT."
            url="https://bnt-lapo.appspot.com/"
            stackFe={[HTMLLogo, JQueryLogo, SassLogo]}
            stackBe={[PythonLogo, FlaskLogo]}
          />
          <Project
            nombre="cryptocartera"
            descripcion="Seguidor de cartera de cryptos y otros assets."
            url="https://github.com/TomasSuarezL/cryptocartera"
            stackFe={[HTMLLogo, JQueryLogo, SassLogo, d3Logo]}
            stackBe={[PythonLogo, FlaskLogo, PostgresLogo]}
          />
          <Project
            nombre="react-cv"
            descripcion="Personal CV built on React Stack."
            url="https://github.com/TomasSuarezL/react-cv"
            stackFe={[ReactLogo, ReduxLogo, SassLogo]}
            stackBe={[]}
          />
          <Project
            nombre="LambdaBrewer"
            descripcion="Herramienta para crear recetas de cervezas."
            url="https://github.com/TomasSuarezL/LambdaBrewer"
            stackFe={[AndroidLogo]}
            stackBe={[AndroidLogo]}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(MyHistory);
