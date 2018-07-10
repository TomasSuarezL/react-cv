import React, { Component } from "react";
import "./MyData.css";
import PersonalData from "./PersonalData";
import Skills from "./Skills";

class MyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandSkills: true
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse() {
    this.setState({
      expandSkills: !this.state.expandSkills
    });
  }

  render() {
    const collapseStyle = this.state.expandSkills ? "collapse" : "";
    return (
      <div className="my-data">
        <PersonalData collapse={collapseStyle} nombre={this.props.nombre} />
        <Skills handleCollapse={this.handleCollapse} />
      </div>
    );
  }
}

export default MyData;
