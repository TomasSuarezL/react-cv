import React from "react";
import "./Skill.css";

const Skill = props => {
  let skillPoints = [];
  for (let i = 0; i < props.skillPoints; i++) {
    skillPoints.push(
      <div
        style={{ backgroundColor: props.skillColor }}
        className="skill-point"
      />
    );
  }

  for (let i = 0; i < 5 - props.skillPoints; i++) {
    skillPoints.push(
      <div
        style={{ backgroundColor: props.skillColor, opacity: "0.5" }}
        className="skill-point"
      />
    );
  }

  return (
    <div className="skill">
      <img src={props.skillImg} className="skill-logo" />
      <p style={{ color: props.skillColor }}>{props.skillName}</p>
      <div className="skill-bar">{skillPoints}</div>
    </div>
  );
};

export default Skill;
