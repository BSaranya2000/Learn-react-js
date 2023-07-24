import React from "react";
class Childclass extends React.Component {
    render () {
        console.log(this.props);
    const {count,addcount,subcount} =this.props
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
}
    

export default Childclass;