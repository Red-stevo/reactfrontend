import {Component} from "react";


class ClassEvent extends Component
{
    handle()
    {
        console.log("You clicked the class Component even Handler.")
    }

    render() {
        return(
          <div>
              <h1><u>This Is Class Even Handling</u></h1>
              <button onClick={this.handle}>Click Me </button>
          </div>
        );
    }
}

export default ClassEvent;