import React, { Component } from "react";

import "./bottombar.css";

class Bottombar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bottombar">
        <div className="cover">
          <div className="left">
            <img
              src="http://oiq8j9er1.bkt.clouddn.com/music_%E5%AF%BB%E9%9B%BE%E5%90%AF%E4%BA%8B.jpg"
              alt=""
            />
            <span className="info">
              <span className="musicName">歌曲名</span>
              <span className="player">演唱者</span>
            </span>
          </div>
          <div className="right">
            <i className="icon-play" />
            <i className="icon-list-music" />
          </div>
        </div>
      </div>
    );
  }
}

export default Bottombar;
