import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { translateReducer } from "./Reducers/Translate";
import { toggleLang } from "./Actions/Translate";
import MyData from "./Components/MyData";
import MyHistory from "./Components/MyHistory";
import Hobbies from "./Components/Hobbies";
import "./App.css";

const store = createStore(translateReducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Ing. Tomás Suárez Lissi",
      idLang: store.getState().id
    };
    this.handleChange = this.handleChange.bind(this);
    const unsubscribe = store.subscribe(this.handleChange);
  }

  handleChange() {
    this.setState({
      idLang: store.getState().id
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="main-container">
          <div className="toggle">
            {store.getState().language}:
            <button
              id="toggle-lang"
              onClick={() => store.dispatch(toggleLang())}
            >
              <div
                className="toggle-switch"
                style={{
                  transform:
                    this.state.idLang == "ENG"
                      ? "translate(0%)"
                      : "translate(100%)"
                }}
              >
                {this.state.idLang}
              </div>
            </button>
          </div>
          <MyData nombre={this.state.nombre} />
          <MyHistory />
          <Hobbies />
        </div>
      </Provider>
    );
  }
}

export default App;
