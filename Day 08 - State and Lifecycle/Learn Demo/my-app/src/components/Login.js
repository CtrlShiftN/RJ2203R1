import { Component } from "react";

export default class Login extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <h1>Welcome, guest</h1>
                <button onClick={this.props.onClick}>{this.props.label}</button>
            </div>
        )
    }
}