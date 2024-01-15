import {Component} from "react";

class ClassEventBinding extends Component
{

    constructor() {
        super();
        this.state = {
            binding : "performing the binding"
        }
    }
    handle = () =>
    {
        this.setState({
                binding: "Binding successful",
            }
        );
    }

    handle2 = () =>
    {
        this.setState({
            binding : "On Mouse Out Bound too"
        })
    }

    render() {
        return(
            <div>
                <h1><u>This is Event Binding</u></h1>
                <h1>{this.state.binding}</h1>
                <button onMouseOver={this.handle} onMouseOut={this.handle2}>On Mouse Over</button>
            </div>
        );
    }
}

export default ClassEventBinding;