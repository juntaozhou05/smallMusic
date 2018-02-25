import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <i className="menu icon-menu" />
        <div className="center">
          <i className="music icon-music" />
          <i className="find icon-wangyi" />
          <i className="community icon-community" />
        </div>
        <i class="search icon-search" />
      </div>
    );
  }
}

export default Header;
