import React, { Component } from 'react';

class Button extends Component {
    constructor(props, context) {
        super(props,context);
        this.state = {
            num:2
        }
    }
    render() {
        return (
        <div className="Button">
            <button onClick={this.add.bind(this)}>加一</button>
            <button onClick={this.minus.bind(this)}>减一</button>
            <div>{this.state.num}</div>
        </div>
        );
    }
    add() {
        let that = this
        this.setState({
            num:that.state.num + 1
        })
    }
    minus() {
        let that = this
        this.setState({
            num:that.state.num - 1
        })
    }
    
}

export default Button;