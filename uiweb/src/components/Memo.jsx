import { factorial } from "../utils/Factorial";
import { useState } from "react";
const Memo = ()=>{
    const[num,setNum] = useState(0);
    const[isDark,setIsDark] = useState(false);
    const ans = factorial(num);
    console.log(ans);   
    return(
        <div className={`max-w-4xl mx-auto border border-gray-500 ${isDark&&"bg-gray-900 text-white"}`}>
            <div className="m-2">
            <button className="bg-blue-700 font-bold  p-2 text-white rounded-md" onClick={()=>setIsDark(!isDark)}>Toggle</button>
            <h1 className="mt-2 font-bold text-xl ">Memo Component</h1>
            <input className="mt-2 border border-gray-700 text-black" type="number" value={num} onChange={(e)=>setNum(e.target.value)}  />
            <h1 className="mt-2">Factorial:{ans}</h1>
            </div>
          
        </div>
    )
}
export default Memo;