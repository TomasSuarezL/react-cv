import React from "react";
import "./Skill.css";

const Skill = props => {
  let skillPoints = [];
  for (let i = 0; i < props.skillPoints; i++) {
    skillPoints.push(
      <div
        key={i}
        style={{ backgroundColor: props.skillColor }}
        className="skill-point"
      />
    );
  }

  for (let i = 0; i < 5 - props.skillPoints; i++) {
    skillPoints.push(
      <div
        key={i + props.skillPoints}
        style={{ backgroundColor: props.skillColor, opacity: "0.5" }}
        className="skill-point"
      />
    );
  }

  return (
    <div className="skill">
      {props.skillImg ? (
        <img src={props.skillImg} className="skill-logo" />
      ) : null}
      <p style={{ color: props.skillColor }}>{props.skillName}</p>
      <div className="skill-bar">{skillPoints}</div>
    </div>
  );
};

export default Skill;
