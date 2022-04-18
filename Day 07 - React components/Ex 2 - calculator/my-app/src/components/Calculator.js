import { Component } from "react";
import Button from "./Button";
import Input from "./Input";

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = { firstNumber: 0, secondNumber: 0, operator: '', displayValue: 0 }
    }

    calculate = (operator) => {
        switch (operator) {
            case "+":
                this.setState({ displayValue: parseFloat(this.state.firstNumber) + parseFloat(this.state.secondNumber) });
                break;
            case "-":
                this.setState({ displayValue: parseFloat(this.state.firstNumber) - parseFloat(this.state.secondNumber) });
                break;
            case "*":
                this.setState({ displayValue: parseFloat(this.state.firstNumber) * parseFloat(this.state.secondNumber) });
                break;
            case "/":
                this.setState({ displayValue: parseFloat(this.state.firstNumber) / parseFloat(this.state.secondNumber) });
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <div className="container">
                <Input type="number" className="" onKeyUp={(e) => { this.setState({ firstNumber: e.target.value }) }} placeholder={'Enter your first number'} />
                <br></br>
                <br></br>
                <Input type="number" className="abc" onKeyUp={(e) => { this.setState({ secondNumber: e.target.value }) }} placeholder={'Enter your second number'} />
                <br></br>
                <br></br>
                <h3>Result: {this.state.displayValue}</h3>
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("+") }} label="+" />
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("-") }} label="-" />
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("*") }} label="*" />
                <Button className="btn btn-info mx-3" onClick={(e) => { this.calculate("/") }} label="/" />
            </div>
        )

    }
}