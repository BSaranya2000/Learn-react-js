import React, {useState} from "react";
import "./Counter.css";
const Counterchild =  (props) => {
    console.log(props);
    const {count,addcount,subcount} =props
    return (
        <div className="body">
        <div className="inputbox">
        <div className="app">
           <h1> Counter {count} </h1>
           </div>
            <div className="btn">
                <button onClick={addcount}>Increment</button>
                <button onClick={subcount}>Decrement</button>
            </div>
            </div>
        </div>
    )
}
export default Counterchild;

