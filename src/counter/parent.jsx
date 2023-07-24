import React, {useState} from "react";
import Child from "./child";
const Parent= () => {
    const [count,setcount]=useState(0);
    return(
            <div>
                <Child count={count} addcount={()=>setcount(count+2)}
                subcount={()=>setcount(count-2)}></Child>
            </div>
    )
}
export default Parent;