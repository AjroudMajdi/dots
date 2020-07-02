import React, { Component } from "react";
import Logo1 from "./Logo1.svg";
import "./App.css";
import Firstpage from "./Firstpage.js";
import HelloPage from "./HelloPage.js";
import {
  BrowserRouter as Router,
  useHistory,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { Button } from "react-bulma-components";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
    };
  }
  hello = () => {
    alert("hiiii");
  };

  render() {
    const { fname, lname } = this.state;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HelloPage}></Route>
          <Route path="/Firstpage" component={Firstpage}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
