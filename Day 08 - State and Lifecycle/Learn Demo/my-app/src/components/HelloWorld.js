import { Component } from "react";

export default class HelloWorld extends Component {
    componentWillUnmount() {
        alert('This component is going to be unmounted');
    }
    render() {
        return (
            <h1>Hello world</h1>
        )
    }
}