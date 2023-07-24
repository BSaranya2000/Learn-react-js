import React from "react";
const Child = (props) => {
    console.log(props);
    const {count,addcount,subcount} =props
    return (
        <div>
            Counter {count}
            <div>
                <button onClick={addcount}>+</button>
                <button onClick={subcount}>-</button>
            </div>
        </div>
    )
}
export default Child;