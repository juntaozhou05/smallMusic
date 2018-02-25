import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onClickShow } = this.props;
    return (
      <div className="header">
        <i className="menu icon-menu" onClick={onClickShow} />
        <div className="center">
          <i className="music icon-music" />
          <i className="find icon-wangyi" />
          <i className="community icon-community" />
        </div>
        <i className="search icon-search" />
      </div>
    );
  }
}

export default Header;
