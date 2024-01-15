import {Component} from "react";

class Count extends Component
{

    constructor() {
        super();
        this.state = {
            value : 0,
        }
    }

    Increment()
    {
        this.setState({
                value : this.state.value + 1,
            }
        )
    }

    Decrement()
    {
        this.setState({
            value : this.state.value - 1,
        })
    }

    render() {
        return(
            <div>
                <h1>The Count value is : {this.state.value} </h1>
                <pre><button onClick={() => this.Increment()}>+</button>  <button onClick={() => this.Decrement()}>-</button></pre>
            </div>
        )
    }
}

export default Count;