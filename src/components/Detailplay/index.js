import React, { Component } from "react";
import "./detailplay.css";
import wrapper from "../../imgs/cd_wrapper.png";

class Detailplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgimg:
        "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg",
      coverimg: "../imgs/cd_wrapper.png"
    };
  }
  render() {
    return (
      <div className="detailplay">
        <div
          className="detailCover"
          style={{ backgroundImage: "url(" + this.state.bgimg + ")" }}
        />
        <div className="detailTop">
          <div className="left">
            <i className="back icon-back" />
            <div className="title">
              <div className="singName">小酒窝</div>
              <div className="singer">林俊杰，蔡卓妍</div>
            </div>
          </div>
          <i className="share icon-share" />
        </div>
        <div className="detailContent">
          <div className="imgCover">
            <img className="wrapper" src={wrapper} alt="" />
            <img className="singImg" src={this.state.bgimg} alt="" />
          </div>
          <div className="tools">
            <i className="share icon-share" />
            <i className="share icon-share" />
            <i className="share icon-share" />
            <i className="setting icon-list-circle" />
          </div>
          <div className="playControl">
            <div className="startTime">00:00</div>
            <div className="line" />
            <div className="endTime">04:30</div>
          </div>
          <div className="bottom">
            <i className="playType icon-music-shunxu" />
            <i className="prev icon-prevdetail" />
            <i className="playPause icon-playdetail" />
            <i className="next icon-nextdetail" />
            <i className="menu icon-list-music" />
          </div>
        </div>
      </div>
    );
  }
}

export default Detailplay;
