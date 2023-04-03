import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState(() => {
            return {
                counter: this.state.counter + 1
            }
        })
    }

    decrement() {
        this.setState(() => {
            return {
                counter: this.state.counter - 1 
            }
        })
    }

    render() {
        return (
            <div className="counter">
            <h3>Counter: {this.state.counter}</h3>
            <div className="counter__buttons">
                <button onClick={this.increment}>Increment</button>
                <button onClick={(e) => this.decrement(e)}>Decrement</button>
            </div>
        </div>
        )
    }
} 

export default Counter;