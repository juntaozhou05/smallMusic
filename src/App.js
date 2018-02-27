import React, { Component } from "react";
import "./App.css";
import "./common/font-icon/style.css";

import HeaderMove from "./containers/HeaderMove";
import Mymusic from "./components/Mymusic/";
import Bottombar from "./components/Bottombar/";
import MoveContainer from "./containers/MoveContainer";
import Mymusiclist from "./components/Mymusiclist/";
import Mymusiccllection from "./components/Mymusiccllection/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMove />
        <Mymusic />
        <Bottombar />
        <MoveContainer />
        <Mymusiclist />
        <Mymusiccllection />
      </div>
    );
  }
}

export default App;
