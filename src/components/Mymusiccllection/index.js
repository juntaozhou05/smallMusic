import React, { Component } from "react";
import "./mymusiccllection.css";

class Mymusiccllection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "block",
      musicData: [
        {
          icon: "http://oiq8j9er1.bkt.clouddn.com/music_far%20away.jpg",
          title: "我喜欢的音乐",
          total: "30首歌曲"
        },
        {
          icon: "http://oiq8j9er1.bkt.clouddn.com/music_owl_city.jpg",
          title: "在欧洲田园般的乡村上骑单车",
          total: "15首歌曲"
        },
        {
          icon: "http://oiq8j9er1.bkt.clouddn.com/music_1989.jpg",
          title: "大卫爱上泰勒斯威夫特",
          total: "15首歌曲"
        }
      ]
    };
  }
  toggleShow() {
    if (this.state.isShow === "block") {
      this.setState({
        isShow: "none"
      });
    } else if (this.state.isShow === "none") {
      this.setState({
        isShow: "block"
      });
    }
  }
  render() {
    return (
      <div className="mymusiclist">
        <div className="musicTitle" onClick={this.toggleShow.bind(this)}>
          <div>我创建的歌单 (5) </div>
          <i className="icon-setting" />
        </div>
        <div className="musicLists" style={{ display: this.state.isShow }}>
          {this.state.musicData.map((item, index) => {
            return (
              <div className="items" key={index}>
                <div className="left">
                  <img className="musicIcon" src={item.icon} alt="" />
                  <div className="titleCover">
                    <div className="title">{item.title}</div>
                    <div className="total">{item.total}</div>
                  </div>
                </div>
                <div className="right">
                  <i className="setting icon-list-circle" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Mymusiccllection;
