import {Component} from "react";

class ClassPropsDestructuring extends Component
{
    render() {
        const {fName, sName, lName} = this.props;
        return(
            <div>
                <h1>My Names Are :{fName} {sName} {lName}</h1>
            </div>
        );
    }
}
export default ClassPropsDestructuring;