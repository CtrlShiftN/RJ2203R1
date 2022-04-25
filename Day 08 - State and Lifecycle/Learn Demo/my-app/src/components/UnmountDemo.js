import { Component } from "react";
import HelloWorld from './HelloWorld';

export default class UnmountDemo extends Component {
    constructor() {
        super();
        this.state = { displayStatus: true }
    }
    render() {
        if (this.state.displayStatus) {
            var message = <HelloWorld />;
        }
        return (
            <div>
                {message}
                <button onClick={() => this.setState({ displayStatus: false })}>Delete the components</button>
            </div>
        )
    }
}
