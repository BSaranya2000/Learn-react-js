import React from "react";
class Counterapp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render () {
        const {count} = this.state;
        console.log(count , "value");
        return (
            <div>
                Counter {count}
                <button onClick={() => this.setState ({count: count+4})}>+</button>
                <button onClick={() => this.setState ({count: count-4})}>-</button>

            </div>
        )
    }
}
export default Counterapp