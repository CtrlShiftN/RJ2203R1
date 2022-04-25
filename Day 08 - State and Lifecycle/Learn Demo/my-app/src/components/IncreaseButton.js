import { Component } from "react";

export default class IncreaseButton extends Component {
    constructor() {
        super();
        this.state = { value: 0 }
    }
    render() {
        return (
            <div className='container'>
                <h3>{this.state.value}</h3>
                <button onClick={(e) => { this.setState({ value: this.state.value + 1 }) }}>Increase (+)</button>
                <button onClick={(e) => { this.setState({ value: this.state.value - 1 }) }}>Decrease (-)</button>
            </div>
        )
    }
}