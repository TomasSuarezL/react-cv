import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./MyData.css";
import PersonalData from "./PersonalData";
import Skills from "./Skills";

const mapStateToProps = state => {
  return {
    title: state.title,
    aboutMe: state.aboutMe,
    aboutMeTitle: state.aboutMeTitle,
    contactoTitle: state.contactoTitle,
    languagesTitle: state.language + "s",
    english: state.english,
    spanish: state.spanish
  };
};

class MyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandSkills: false
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse() {
    this.setState({
      expandSkills: !this.state.expandSkills
    });
  }

  render() {
    const collapseStyle = this.state.expandSkills ? " collapse" : "";
    return (
      <div className="my-data">
        <PersonalData
          collapse={collapseStyle}
          nombre={this.props.nombre}
          apellido={this.props.apellido}
          {...this.props}
        />
        <Skills
          handleCollapse={this.handleCollapse}
          collapsed={this.state.expandSkills}
        />
      </div>
    );
  }
}

MyData.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  null
)(MyData);
