import React, { Component } from "react";
import "./App.css";
import "./common/font-icon/style.css";

import HeaderMove from "./containers/HeaderMove";
import Mymusic from "./components/Mymusic/";
import Bottombar from "./components/Bottombar/";
import MoveContainer from "./containers/MoveContainer";
import Mymusiclist from "./components/Mymusiclist/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMove />
        <Mymusic />
        <Bottombar />
        <MoveContainer />
        <div className="listCover">
          <Mymusiclist />
          <Mymusiclist />
        </div>
      </div>
    );
  }
}

export default App;
