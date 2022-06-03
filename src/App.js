import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import * as math from "mathjs";

const operatorsArr = ["*", "/", "+", ".", "-"];

export default function App() {
  const [input, setInput] = useState("");

  function inputNum(val) {
    setInput(input + val);
  }

  function inputOperator(val) {
    if (
      input === "" ||
      (operatorsArr.includes(input[input.length - 1]) &&
        operatorsArr.includes(val))
    ) {
      return;
    } else {
      setInput(input + val);
    }
  }

  function evaluate() {
    if (input === "" || operatorsArr.includes(input[input.length - 1])) {
      return input;
    } else {
      setInput(math.evaluate(input));
    }
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calc-wrapper">
        <Button isInput>{input}</Button>
        <div className="row">
          <Button onClick={inputNum}>7</Button>
          <Button onClick={inputNum}>8</Button>
          <Button onClick={inputNum}>9</Button>
          <Button onClick={inputOperator}>/</Button>
        </div>
        <div className="row">
          <Button onClick={inputNum}>4</Button>
          <Button onClick={inputNum}>5</Button>
          <Button onClick={inputNum}>6</Button>
          <Button onClick={inputOperator}>*</Button>
        </div>
        <div className="row">
          <Button onClick={inputNum}>1</Button>
          <Button onClick={inputNum}>2</Button>
          <Button onClick={inputNum}>3</Button>
          <Button onClick={inputOperator}>+</Button>
        </div>
        <div className="row">
          <Button onClick={inputOperator}>.</Button>
          <Button onClick={inputNum}>0</Button>
          <Button onClick={() => setInput("")}>C</Button>
          <Button onClick={inputOperator}>-</Button>
        </div>
        <div className="row">
          <Button onClick={evaluate}>=</Button>
        </div>
      </div>
    </div>
  );
}