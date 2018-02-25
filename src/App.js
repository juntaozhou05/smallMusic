import React, { Component } from "react";
import "./App.css";
import "./common/font-icon/style.css";

import Header from "./components/Header/";
import Mymusic from "./components/Mymusic/";
import Bottombar from "./components/Bottombar/";
import MoveContainer from "./containers/MoveContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Mymusic />
        <Bottombar />
        <MoveContainer />
      </div>
    );
  }
}

export default App;
