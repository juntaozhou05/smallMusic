import React, { Component } from "react";
import "./bottomlist.css";

class Bottomlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { number, onClickHide } = this.props;
    return (
      <div className="bottomlist" style={{ top: number }} onClick={onClickHide}>
        <div className="content">
          <div className="item">歌单：我喜欢的音乐</div>
          <div className="item">
            <i className="info icon-share" />
            <div className="title">分享</div>
          </div>
          <div className="item">
            <i className="info icon-edit" />
            <div className="title">编辑</div>
          </div>
          <div className="item">
            <i className="info icon-delete" />
            <div className="title">删除</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottomlist;
