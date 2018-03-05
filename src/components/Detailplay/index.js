import React, { Component } from "react";
import "./detailplay.css";

class Detailplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgimg:
        "http://oiq8j9er1.bkt.clouddn.com/music_%E6%88%91%E8%BF%98%E6%83%B3%E5%A5%B9.jpg"
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
            <i class="back icon-back" />
            <div className="title">
              <div className="singName">小酒窝</div>
              <div className="singer">林俊杰，蔡卓妍</div>
            </div>
          </div>
          <i class="share icon-share" />
        </div>
        <div className="detailContent">
          <div className="singImg">
            <img src={this.state.bgimg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Detailplay;
