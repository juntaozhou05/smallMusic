import React, { Component } from "react";
import "./sidebar.css";
import icon from "../../imgs/userlogo.jpg";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { number, onClickHide } = this.props;
    return (
      <div className="sidebar" style={{ left: number }} onClick={onClickHide}>
        <div className="left">
          <div className="top">
            <div className="topCover">
              <img className="usericon" src={icon} alt="" />
              <div className="userDetail">
                <div>
                  未曾遗忘的青春 <span className="cover">Lv.9</span>
                </div>
                <div className="sign">
                  <span className="cover">
                    <i className="icon-coin" /> 签到
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="topLists">
            <div className="items">
              <i className="icon icon-message" />
              <span className="title">我的消息</span>
            </div>
            <div className="items">
              <i class="icon icon-vip" />
              <span className="title">我的会员</span>
              <div className="floatRight">2018.10.1到期</div>
            </div>
            <div className="items">
              <i class="icon icon-market" />
              <span className="title">商城</span>
            </div>
            <div className="line" />
            <div className="items">
              <i class="icon icon-friend" />
              <span className="title">我的好友</span>
            </div>
            <div className="items">
              <i class="icon icon-place" />
              <span className="title">附近的人</span>
            </div>
            <div className="line" />
            <div className="items">
              <i class="icon icon-theme" />
              <span className="title">个性换肤</span>
              <div className="floatRight">官方红</div>
            </div>
            <div className="items">
              <i class="icon icon-set-time" />
              <span className="title">定时播放</span>
            </div>
            <div className="items">
              <i class="icon icon-lock" />
              <span className="title">音乐闹钟</span>
            </div>
            <div className="items">
              <i class="icon icon-car" />
              <span className="title">驾驶模式</span>
            </div>
            <div className="items">
              <i class="icon icon-cloud" />
              <span className="title">音乐云盘</span>
            </div>
          </div>
          <div className="bottom">
            <div className="mode">
              <i class="icon-night" /> 夜间模式
            </div>
            <div className="set">
              <i class="icon-setting" /> 设置
            </div>
            <div className="out">
              <i class="icon-exit" /> 退出
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
