//List rendereing
import React,{useState} from "react"
import ReactDOM from "react-dom"


function App(){
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const updateNums = () =>{
        const updatedNumbers = numbers.map((number) => {
            return <li key={number}>{number}</li>; // Return the <li> element with key
          });
          return updatedNumbers;
    }
    return (
        <>
          <button onClick={updateNums}>Show Numbers</button>
          <ul>{updateNums()}</ul> {/* Call updateNums to display list */}
        </>
      );
}

export default App