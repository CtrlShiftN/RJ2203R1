import { Component } from "react";

export default class LifeCycleTest extends Component {
    constructor() {
        super();
        this.state = { status: "Ok" }
    }

    setStatus = () => {
        this.setState({ status: "Okela" });
    }
    componentWillMount() { console.log('Component WILL MOUNT!') }
    componentDidMount() { console.log('Component DID MOUNT!') }
    componentWillReceiveProps(newProps) { console.log('Component WILL RECIEVE PROPS!') }
    shouldComponentUpdate(newProps, newState) { return true; }
    componentWillUpdate(nextProps, nextState) { console.log('Component WILL UPDATE!'); }
    componentDidUpdate(prevProps, prevState) { console.log('Component DID UPDATE!') }
    componentWillUnmount() { console.log('Component WILL UNMOUNT!') }

    render() {
        console.log("Component render");
        return (
            <div>
                <h1>{this.state.status}</h1>
                <button onClick={(e) => { this.setStatus() }}>Click me</button>
            </div>
        )
    }
}