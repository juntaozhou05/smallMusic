import React, { Component } from "react";
import "./detailplay.css";

class Detailplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="detailplay">
        <div className="top">
          <div className="left">
            <i class="back icon-back" />
            <div className="title" />
          </div>
        </div>
      </div>
    );
  }
}

export default Detailplay;
