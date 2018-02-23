import React, { Component } from "react";
import "./App.css";
import "./common/font-icon/style.css";

import Header from "./Header/";
import Mymusic from "./Mymusic/";
import Bottombar from "./Bottombar/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Mymusic />
        <Bottombar />
      </div>
    );
  }
}

export default App;
