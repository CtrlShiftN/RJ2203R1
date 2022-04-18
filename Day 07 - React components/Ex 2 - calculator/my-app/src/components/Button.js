import { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>{this.props.label}</div>
        )
    }
}