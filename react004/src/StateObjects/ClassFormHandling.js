import {Component} from "react";
import LoginForm from "./LoginForm";

class ClassFormHandling extends Component
{
    state = {userName : " "};

    handle = (event) => {
        this.setState({
            userName : event.target.value,
        });
        console.log(this.state.userName);
    }

    render() {
        return(
            <div>
                <h1><b>FORM</b></h1>
                <input onChange={this.handle} type="text" value={this.state.userName}/>
            </div>
        );
    }
}

export default ClassFormHandling;