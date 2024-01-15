import {Component} from "react";
import './ClassMultipleInput.css'
class ClassMultipleInput extends Component
{
    state = {
        userName : "",
        password : "",
    };

    handleUserName = (event) => {
        this.setState({
           userName : event.target.value,
        });
    }

    handlePassword = (event) =>
    {
        this.setState({
            password : event.target.value,
        })
    }

    formDesign = () =>
    {
        return (
            <form className="firstLogin">
                <table className="loginForm">
                    <tbody>
                        <tr className="login">
                            <td><b>LOGIN</b></td>
                        </tr>
                        <tr>
                            <td className="label">User Name <input name="UserName"
                                                              type="text" value={this.state.userName}
                                       onChange={this.handleUserName}/></td>
                        </tr>
                        <tr>
                            <td className="label">Password <input name="Password"
                                                type="password" value={this.state.password}
                                                onChange={this.handlePassword}/></td>
                        </tr>
                    </tbody>
                </table>
        </form>);
    }


    render() {
        return(
            <div className="loginPage">
                {this.formDesign()}
            </div>
        );
    }
}


export default ClassMultipleInput;