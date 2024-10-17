import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(0); // State to store the result
 
  // Function to handle addition
  function plus(e) { 
    e.preventDefault(); // Prevents the form from refreshing
    setResult((prevResult) => prevResult + Number(inputRef.current.value)); // Updates the result state
  }; 
 
  // Function to handle subtraction
  function minus(e) {
    e.preventDefault(); // Prevent refresh
    setResult((prevResult) => prevResult - Number(inputRef.current.value));
  };
 
  // Function to handle multiplication
  function times(e) { 
    e.preventDefault(); // Prevent refresh
    setResult((prevResult) => prevResult * Number(inputRef.current.value));
  }; 
 
  // Function to handle division
  function divide(e) { 
    e.preventDefault(); // Prevent refresh
    setResult((prevResult) => prevResult / Number(inputRef.current.value));
  };
 
  // Function to reset the input field
  function resetInput(e) { 
    e.preventDefault(); // Prevent refresh
    inputRef.current.value = ""; // Reset the input field to empty
  }; 
 
  // Function to reset the result
  function resetResult(e) { 
    e.preventDefault(); // Prevent refresh
    setResult(0); // Reset the result to 0
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        {/* Displaying the current result */}
        <p>Result: {result}</p>
        
        {/* Input field */}
        <input
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 

        {/* Operation buttons */}
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 

        {/* Reset buttons */}
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App;