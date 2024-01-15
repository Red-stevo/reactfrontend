import { Component } from "react";

class Message extends Component
{
    constructor() {
        super();
        this.state = {
            message : "Hello Steve"
        }
    }

    change()
    {
        this.setState({
            message : "Hello Bree"
        })
    }


    render() {
        return(
          <div>
              <h1>{this.state.message}</h1>
              <button onClick={() => this.change()}>Reply</button>
          </div>
        );
    }
}
export default Message;