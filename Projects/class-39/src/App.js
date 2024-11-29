import React, { Component, createRef } from "react";
import "./App.css";

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
    this.op1Ref = createRef();
    this.op2Ref = createRef();
  }

  handleMultiply = () => {
    const op1 = parseFloat(this.op1Ref.current.value) || 0;
    const op2 = parseFloat(this.op2Ref.current.value) || 0;
    const result = op1 * op2;
    this.setState({ result });
  };

  render() {
    const { result } = this.state;

    return (
      <form className="myform-container">
        <h1 className="myform-title">Multiply Numbers</h1>
        <div className="form-group">
          <label htmlFor="num1">Operand 1</label>
          <input
            type="number"
            id="num1"
            ref={this.op1Ref}
            className="input-field"
            placeholder="Enter first number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="num2">Operand 2</label>
          <input
            type="number"
            id="num2"
            ref={this.op2Ref}
            className="input-field"
            placeholder="Enter second number"
          />
        </div>
        <button type="button" className="btn-submit" onClick={this.handleMultiply}>
          Multiply
        </button>
        {result !== null && <p className="result-display">Result: {result}</p>}
      </form>
    );
  }
}

export default AppForm;