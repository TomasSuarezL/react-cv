import React from "react";
import { CSSTransition } from "react-transition-group";
import Skill from "./Skill";
import "./Skills.css";
import PythonLogo from "../Static/Techs/Python.svg";
import JQueryLogo from "../Static/Techs/jquery-original.svg";
import SassLogo from "../Static/Techs/Sass.svg";
import PostgresLogo from "../Static/Techs/Postgresql.svg";
import ReactLogo from "../Static/Techs/React.svg";
import JSLogo from "../Static/Techs/JS.svg";
import CSLogo from "../Static/Techs/c-sharp-logo.png";
import NodeLogo from "../Static/Techs/nodejs.svg";
import MongoLogo from "../Static/Techs/Mongo.svg";
import SQLServerLogo from "../Static/Techs/SQLServer.svg";

const FullSkills = props => {
  return (
    <div className="skills">
      <div className="skills-column">
        <p style={{ textAlign: "center" }}>Front-End</p>
        <Skill
          key="javascript"
          skillName="JavaScript"
          skillImg={JSLogo}
          skillPoints="3"
          skillColor="rgba(241,221,88,1)"
        />
        <Skill
          key="react"
          skillName="React"
          skillImg={ReactLogo}
          skillPoints="2"
          skillColor="rgba(97,219,251,1)"
        />
        <Skill
          key="sass"
          skillName="Sass"
          skillImg={SassLogo}
          skillPoints="3"
          skillColor="rgba(204,102,153,1)"
        />
      </div>
      <div className="skills-column">
        <p style={{ textAlign: "center" }}>Back-End</p>
        <Skill
          key="python"
          skillName="Python"
          skillImg={PythonLogo}
          skillPoints="2"
          skillColor="rgba(157,200,217,1)"
        />
        <Skill
          key="c#"
          skillName="C#"
          skillImg={CSLogo}
          skillPoints="3"
          skillColor="rgba(68,116,202,1)"
        />
        <Skill
          key="nodejs"
          skillName="NodeJS"
          skillImg={NodeLogo}
          skillPoints="2"
          skillColor="rgba(80,153,67,1)"
        />
      </div>
      <div className="skills-column">
        <p style={{ textAlign: "center" }}>BD</p>
        <Skill
          key="sqlserver"
          skillName="SQLServer"
          skillImg={SQLServerLogo}
          skillPoints="4"
          skillColor="rgba(242,22,29,1)"
        />
        <Skill
          key="postgresql"
          skillName="PostgreSQL"
          skillImg={PostgresLogo}
          skillPoints="2"
          skillColor="rgba(68,116,202,1)"
        />
        <Skill
          key="mongodb"
          skillName="MongoDB"
          skillImg={MongoLogo}
          skillPoints="2"
          skillColor="rgba(68,143,59,1)"
        />
      </div>
    </div>
  );
};

const TopSkills = props => {
  return (
    <div className="skills">
      <div className="skills-column">
        <Skill
          key="javascript"
          skillName="JavaScript"
          skillImg={JSLogo}
          skillPoints="3"
          skillColor="rgba(241,221,88,1)"
        />
        <Skill
          key="react"
          skillName="React"
          skillImg={ReactLogo}
          skillPoints="2"
          skillColor="rgba(97,219,251,1)"
        />
        <Skill
          key="python"
          skillName="Python"
          skillImg={PythonLogo}
          skillPoints="3"
          skillColor="rgba(157,200,217,1)"
        />
        <Skill
          key="sqlserver"
          skillName="SQLServer"
          skillImg={SQLServerLogo}
          skillPoints="4"
          skillColor="rgba(242,55,71,1)"
        />
      </div>
    </div>
  );
};

const Skills = props => {
  function handleCollapse() {
    console.log("handle collapse");
    props.handleCollapse();
  }

  return (
    <div className="skills-container personal-data-div container ">
      <h3>
        <i style={{ marginRight: "16px" }} class="far fa-chart-bar fa-sm" />Skills
      </h3>{" "}
      <CSSTransition in={props.collapsed} timeout={500} classNames="skills">
        {props.collapsed ? <FullSkills /> : <TopSkills />}
      </CSSTransition>
      <button onClick={handleCollapse}>
        {props.collapsed ? "Hide Skills" : "Show Skills"}
      </button>
    </div>
  );
};

export default Skills;
