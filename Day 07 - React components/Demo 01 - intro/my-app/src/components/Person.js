import { Component } from "react";

class Person extends Component{
    render(){
        return (
            <h1>I am {this.props.name} - a class component</h1>
        )
    }
}
export default Person;