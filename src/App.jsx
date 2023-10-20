import { useState } from "react";
import audioFile from './click.wav'
import "./App.css";

function App() {
  let [input, setInput] = useState("0");
  let [result, setResult] = useState("");
  // const [audio] = useState(new Audio(audioFile));

  const styles = {
    color: "#66FF7F",
  };

  function getInput(e) {
    // audio.play();
    let { value } = e.target;

    if (input === "0") {
      input = "";
    }

    setInput(input + value);
  }

  //square root function
  function sqrt() {
    setResult(Math.sqrt(input))
  }
  
  //square function
  function sqr() {
    setResult(input * input)
  }

  //clearing the ipnut and result fields
  function clearFields() {
    setInput("0");
    setResult();
  }
  
  //calculation function
  function equalTo() {
    const refined = input.replace(/×/g, "*")
    const result = eval(refined.replace(/÷/g, "/"));
    setResult(result);
  }

  return (
    <main>
      <p className="result">{result}</p>
      <p className="input">{input}</p>

      <button value="c" onClick={clearFields}>
        C
      </button>

      <button value="√" onClick={sqrt} style={styles}>
        √
      </button>

      <button value="%" onClick={sqr} style={styles}>
      x²
      </button>

      <button value="÷" onClick={getInput} style={styles}>
        ÷
      </button>

      <button value="7" onClick={getInput}>
        7
      </button>

      <button value="8" onClick={getInput}>
        8
      </button>

      <button value="9" onClick={getInput}>
        9
      </button>

      <button value="×" onClick={getInput} style={styles}>
        ×
      </button>

      <button value="4" onClick={getInput}>
        4
      </button>

      <button value="5" onClick={getInput}>
        5
      </button>

      <button value="6" onClick={getInput}>
        6
      </button>

      <button value="-" onClick={getInput} style={styles}>
        -
      </button>

      <button value="1" onClick={getInput}>
        1
      </button>

      <button value="2" onClick={getInput}>
        2
      </button>

      <button value="3" onClick={getInput}>
        3
      </button>

      <button value="+" onClick={getInput} style={styles}>
        +
      </button>

      <button>+/-</button>

      <button value="0" onClick={getInput}>
        0
      </button>

      <button value="." onClick={getInput}>
        .
      </button>

      <button value="=" onClick={equalTo}>
        =
      </button>
    </main>
  );
}

export default App;
