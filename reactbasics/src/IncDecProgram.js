import React,{useState} from "react"
const App=()=>{
    const[counter,setCounter] = useState(0);
    const Increment=()=>{
        setCounter(counter+1);
    }
    
    const Decrement=()=>{
        setCounter(counter-1);
    }
return <>
<h1>Counter :{counter}</h1>
<button onClick={Increment}>Increment</button><br/>
<button onClick={Decrement}>Decrement</button>
</>
}
export default App;