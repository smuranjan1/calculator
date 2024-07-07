import './App.css';
import { useState } from 'react';
import  CalculatorButton  from './CalculatorButton'

const validButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '%', '/', '*', '-', '+', '=', '.'];

function App() {

  const [input, setInput] = useState("0");
  const [result, setResult] = useState([]);
  
  const handleInput = (value) => (event) => {
    if (input === "0") {
      setInput(value)
    } else {
      setInput(input.concat(value))
    }
  }

  const handleKeydown = (value) => {
    console.log(value)
    if (input === "Enter") {
      calculateResult();
      return;
    }
    if (!validButtons.includes(value)) {
      return;
    }

    if (input === "0") {
      setInput(value)
    } else {
      setInput(input.concat(value))
    }
  }

  const calculateResult = () => {
    try {
      if (input[0] === '/' || input[0] === '*' || input[0] === '+' || input[0] === '-') {
        setResult(eval(result + input))
      } else {
        setResult(eval(input));
      }
    } catch (error) {
      setResult("ERROR")
    }
    setInput("0");
  }

  const clearInput = () => {
    setInput("0");
    setResult("");
  }

  // document.addEventListener('keydown', (event) => handleKeydown(event.key));

  return (
    <div id="calculator">
      <div id="screen">
        <p id="input">{input}</p>
        <p id="result">{result}</p>
      </div>
      <div id="button-container">
        <button id="clear" onClick={clearInput}>AC</button>
        <CalculatorButton buttonId="percent" buttonText="%" handleClick={handleInput}/>
        <CalculatorButton buttonId="divide" buttonText="/" handleClick={handleInput}/>
        <CalculatorButton buttonId="seven" buttonText="7" handleClick={handleInput}/>
        <CalculatorButton buttonId="eight" buttonText="8" handleClick={handleInput}/>
        <CalculatorButton buttonId="nine" buttonText="9" handleClick={handleInput}/>
        <CalculatorButton buttonId="multiply" buttonText="*" handleClick={handleInput}/>
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
