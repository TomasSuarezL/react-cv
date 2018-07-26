import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./MyData.css";
import PersonalData from "./PersonalData";
import Skills from "./Skills";

const mapStateToProps = state => {
  return {
    title: state.title
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
    const collapseStyle = this.state.expandSkills ? "collapse" : "";
    return (
      <div className="my-data">
        <PersonalData
          collapse={collapseStyle}
          nombre={this.props.nombre}
          title={this.props.title}
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
  nombre: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  null
)(MyData);
