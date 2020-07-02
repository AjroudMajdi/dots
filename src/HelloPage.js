import React, { Component } from "react";
import Logo1 from "./Logo1.svg";
import "./App.css";
import Firstpage from "./Firstpage.js";
import background1 from "./background1.svg";

import {
  BrowserRouter as Router,
  useHistory,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { Button } from "react-bulma-components";
class HelloPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  hello = () => {
    alert("hiiii");
  };

  render() {
    const { fname, lname } = this.state;
    return (
      <form>
        <div>
          <div
            className="div1"
            style={{ backgroundImage: `url(${background1})` }}
          >
            <input
              className="input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Player Name: "
            />
            <Link to={{ pathname: "/Firstpage", state: [this.state.value] }}>
              <button renderas="button" className="button">
                Start
              </button>
            </Link>
          </div>
          <div
            className="div"
            style={{ backgroundImage: `url(${background1})` }}
          >
            <label className="text">Dots and Boxes By Factory 619</label>
            <img src={Logo1} className="App-logo" alt="logo" />
          </div>
        </div>
      </form>
    );
  }
}

export default HelloPage;
