import React, { Component } from "react";
import "./sidebar.css";
import usericon from "public/imgs/userlogo.jpg";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar">
        <div className="left">
          <div className="top">
            <img className="usericon" src={usericon} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
