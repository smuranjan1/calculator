import './App.css';
import { useState } from 'react';
import  CalculatorButton  from './CalculatorButton'

const operators = ['+', '-', '*', '/'];

function App() {

  const [input, setInput] = useState("0");
  const [result, setResult] = useState([]);
  
  const calculateResult = () => {
    try {
      const formula = input.replace(/x/g, "*").replace(/÷/g, "/");
      if (operators.includes(formula[0])) {
        setResult(eval(result + formula))
      } else {
        setResult(eval(formula));
      }
    } catch (error) {
      setResult("ERROR")
    }
    setInput("0");
  }

  const handleInput = (value) => (event) => {
    if (input === "0") {
      setInput(value)
    } else {
      setInput(input => input.concat(value));
    }
  }


  const clearInput = () => {
    setInput("0");
    setResult("");
  }

  return (
    <div id="calculator">
      <div id="screen">
        <p id="input">{input}</p>
        <p id="result">{result}</p>
      </div>
      <div id="button-container">
        <button id="clear" onClick={clearInput}>AC</button>
        <CalculatorButton buttonId="percent" buttonText="%" handleClick={handleInput}/>
        <CalculatorButton buttonId="divide" buttonText="÷" handleClick={handleInput}/>
        <CalculatorButton buttonId="seven" buttonText="7" handleClick={handleInput}/>
        <CalculatorButton buttonId="eight" buttonText="8" handleClick={handleInput}/>
        <CalculatorButton buttonId="nine" buttonText="9" handleClick={handleInput}/>
        <CalculatorButton buttonId="multiply" buttonText="x" handleClick={handleInput}/>
        <CalculatorButton buttonId="four" buttonText="4" handleClick={handleInput}/>
        <CalculatorButton buttonId="five" buttonText="5" handleClick={handleInput}/>
        <CalculatorButton buttonId="six" buttonText="6" handleClick={handleInput}/>
        <CalculatorButton buttonId="subtract" buttonText="-" handleClick={handleInput}/>
        <CalculatorButton buttonId="one" buttonText="1" handleClick={handleInput}/>
        <CalculatorButton buttonId="two" buttonText="2" handleClick={handleInput}/>
        <CalculatorButton buttonId="three" buttonText="3" handleClick={handleInput}/>
        <CalculatorButton buttonId="add" buttonText="+" handleClick={handleInput}/>
        <CalculatorButton buttonId="zero" buttonText="0" handleClick={handleInput}/>
        <CalculatorButton buttonId="decimal" buttonText="." handleClick={handleInput}/>
        <button id="equals" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
