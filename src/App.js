import React, { Component } from "react";
import "./App.css";
import "./common/font-icon/style.css";

import HeaderMove from "./containers/HeaderMove";
import Mymusic from "./components/Mymusic/";
import Bottombar from "./components/Bottombar/";
import MoveContainer from "./containers/MoveContainer";
import ConnectMymusiclist from "./containers/ConnectMymusiclist";
import ConnectBottomlist from "./containers/ConnectBottomlist";
import ConnectDetailplay from "./containers/ConnectDetailplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMove />
        <Mymusic />
        <Bottombar />
        <MoveContainer />
        <div className="listCover">
          <ConnectMymusiclist />
          <ConnectMymusiclist />
        </div>
        <ConnectBottomlist />
        <ConnectDetailplay />
      </div>
    );
  }
}

export default App;
