import React from "react";
import { CSSTransition } from "react-transition-group";
import Skill from "./Skill";
import "./Skills.css";

const FullSkills = props => {
  return (
    <div className="skills">
      <div className="skills-column">
        <p style={{ textAlign: "center" }}>Front-End</p>
        <Skill
          key="javascript"
          skillName="JavaScript"
          skillImg="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          skillPoints="3"
          skillColor="rgba(241,221,88,1)"
        />
        <Skill
          key="react"
          skillName="React"
          skillImg="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          skillPoints="2"
          skillColor="rgba(97,219,251,1)"
        />
      </div>
      <div className="skills-column">
        <p style={{ textAlign: "center" }}>Back-End</p>
        <Skill
          key="python"
          skillName="Python"
          skillImg="https://www.spreadshirt.com/image-server/v1/mp/designs/1014396244,width=178,height=178/python-logo.png"
          skillPoints="3"
          skillColor="rgba(157,200,217,1)"
        />
      </div>
      <div className="skills-column">
        <p style={{ textAlign: "center" }}>BD</p>
        <Skill
          key="sql"
          skillName="SQL"
          skillImg="https://uploads.toptal.io/blog/category/logo/60/sql.png"
          skillPoints="4"
          skillColor="rgba(68,116,202,1)"
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
          skillImg="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          skillPoints="3"
          skillColor="rgba(241,221,88,1)"
        />
        <Skill
          key="react"
          skillName="React"
          skillImg="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          skillPoints="2"
          skillColor="rgba(97,219,251,1)"
        />
        <Skill
          key="python"
          skillName="Python"
          skillImg="https://www.spreadshirt.com/image-server/v1/mp/designs/1014396244,width=178,height=178/python-logo.png"
          skillPoints="3"
          skillColor="rgba(157,200,217,1)"
        />
        <Skill
          key="sql"
          skillName="SQL"
          skillImg="https://uploads.toptal.io/blog/category/logo/60/sql.png"
          skillPoints="4"
          skillColor="rgba(68,116,202,1)"
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
    <div className="skills-container personal-data-div">
      <h3>Skills</h3>{" "}
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
