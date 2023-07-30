import React, {useEffect, useState} from "react";
const Fun =  () => {
    const [name, setname]=useState("Saranya")
    useEffect (()=>{
        console.log("Mounting stage");
        setname("Saran")
    } ,[]);
    useEffect (()=> {
        console.log("updating stage");
    }, [name]);
    useEffect (()=> {
        return () => {
        console.log("unmounting");
        };
    });
    console.log("Initialization");
    return (
        <div>
            Counter app 
            </div>
    )
    
}
export default Fun;

