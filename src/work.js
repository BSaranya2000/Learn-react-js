import React, {useState} from "react";
const Work =  () => {
    const [count, setcount]=useState(1)
    return (
        <div>
            Counter {count}
            <div>
                <button onClick={()=> setcount(count + 2)}>+</button>
                <button onClick={()=> setcount (count -1)}>-</button>
            </div>
        </div>
    )
}
export default Work

