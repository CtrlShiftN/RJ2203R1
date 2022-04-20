const { Component } = require("react");

export default class StateDemo extends Component {
    constructor() {
        super();
        this.state = { name: "Hoa" }
    }
    changeName = (obj) => {
        this.setState({ name: "Long" });
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.name}</h1>
                <button onClick={(e) => { this.changeName(e) }}>Click me</button>
            </div>
        );
    }
}