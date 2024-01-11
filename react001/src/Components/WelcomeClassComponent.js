import React,{Component} from "react";
class FirstPage extends Component
{
    render() {
        return(
            <div>
                <h1>Hello there ....This is a {this.props.name}...</h1>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default FirstPage;