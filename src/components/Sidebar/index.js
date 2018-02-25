import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { leftNumber } = this.props;
    console.log(this.props);
    return (
      <div className="sidebar" style={{ left: leftNumber }}>
        <div className="left">
          <div className="top">
            <img className="usericon" src="" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
