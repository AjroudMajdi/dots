import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Firstpage from "./Firstpage";
import { Table, Button } from "react-bootstrap";
import firebase from "./FirebaseConfig";
import lobby from "./lobby.svg";

import {
  BrowserRouter as Router,
  useHistory,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Room: [],
      key: "",
      value: this.props.location.state,
    };
  }
  componentDidMount() {
    this.getMyStory();
  }
  getMyStory = () => {
    const db = firebase.firestore();
    db.collection("Room")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let items = doc.data();
          let value = doc.data().value;

          /* Make data suitable for rendering */
          items = JSON.stringify(items);
          value = JSON.stringify(value);
          /* Update the components state with query result */
          this.setState({ items: items });
          this.setState({ value: value });

          console.log(value);
          console.log(items);
        });
      });
  };

  render() {
    const projects =
      this.state.Room &&
      this.state.Room.map((p) => (
        <div>
          <h1>{p.items.value}</h1>
        </div>
      ));

    return (
      <div className="div" style={{ backgroundImage: `url(${lobby})` }}>
        <Link to={{ pathname: "/Firstpage", state: [this.state.value] }}>
          <button renderas="button" className="button">
            Create New Game
          </button>
        </Link>
        <Table className="table">
          <tr>
            <th>Rooms</th> <th>Players Name</th>
            <th> Action</th>
          </tr>
          <tr>
            <td>1</td> <td>Majdi Ajroud</td>
            <td>
              <button>Join</button>
            </td>
          </tr>
          <tr>
            <td>2</td> <td>Factory 619</td>
            <td>
              <button>Join</button>
            </td>
          </tr>
        </Table>
      </div>
    );
  }
}
export default Room;
