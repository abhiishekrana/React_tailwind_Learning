
import React,{useState} from "react"
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const handleClick = () =>{
    setCount(count+1)
  }
  
  return (
    <div className="App">
     <h1>Button Click Event</h1>
     <p>You have clicked {count}!</p>
     <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
