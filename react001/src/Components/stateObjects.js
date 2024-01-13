import React,{Component} from "react";

class CheckUp extends Component{

    constructor() {
        super();
        this.state = {
            message : "I am sick doctor."
        }
    }

    render() {
        return(
          <div>
              <h1>this.state.message</h1>
              <button>treat</button>
          </div>
        );
    }
}

export default CheckUp;