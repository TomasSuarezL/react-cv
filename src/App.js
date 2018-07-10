import React, { Component } from "react";
import MyData from "./Components/MyData";
import MyHistory from "./Components/MyHistory";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Ing. Tomás Suárez Lissi"
    };
  }

  render() {
    return (
      <div className="main-container">
        <MyData nombre={this.state.nombre} />
        <MyHistory />
      </div>
    );
  }
}

export default App;
