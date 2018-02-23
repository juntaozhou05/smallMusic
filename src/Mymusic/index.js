import React, { Component } from "react";
import "./mymusic.css";

class Mymusic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mymusic">
        <div className="items">
          <i className="info icon-music" />
          <div className="title">
            我的音乐 <span>(28)</span>
          </div>
        </div>
        <div className="items">
          <i className="info icon-zuijinplay" />
          <div className="title">
            最近播放 <span>(28)</span>
          </div>
        </div>
        <div className="items">
          <i className="info icon-diantai" />
          <div className="title">
            我的电台 <span>(28)</span>
          </div>
        </div>
        <div className="items">
          <i className="info icon-collect" />
          <div className="title">
            我的收藏 <span>(28)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Mymusic;
