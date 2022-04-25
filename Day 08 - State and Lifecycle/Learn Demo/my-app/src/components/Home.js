import { Component } from "react";
import Login from "./Login";

export default class Home extends Component {
    constructor() {
        super();
        this.state = { isLogined: true }
    }

    render() {
        if (!this.state.isLogined) {
            return <Login onClick={(e) => this.setState({ isLogined: true })} label="Log in" />
        }
        return (
            <div className='container'>
                <h1>Hello RJ2203R1</h1>
                <button onClick={(e) => this.setState({ isLogined: false })}>Logout</button>
            </div>
        )
    }
}