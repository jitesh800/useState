import React, { useState } from "react";




const App = () =>{
    const state = useState();
    const [count,setCount] = useState(0);
    const incNum = () => {
        return setCount(count+1);
        
    };
    const decNum = () => {
        return setCount(count-1);
        
    };

    
    // const count = 1;
    return(

        <>
        <div className="mt-5 container d-flex justify-content-between"  style={{width:"10%"}}>
        
        <button className="btn btn-success mx-auto" onClick={decNum}>-  </button>
        <h1>{count}</h1>
        <button className="btn btn-success mx-auto" onClick={incNum}>+</button>
        
        </div>
        </>
    ) 
}

export default App;