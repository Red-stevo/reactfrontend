import {useState} from "react";
import React from "react";
import './LoginPage.css'

const LoginForm = () =>
{
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");
    const handleUserName = (event) =>
    {
        setUserName(event.target.value);
        console.log(userName)
    }
    const handlePassword = (event) =>
    {
        setPassword(event.target.value);
        console.log(password)
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        console.log(userName , password);
    }

    return(
        <form onSubmit={handleSubmit} className="loginForm">
            <label className="login" >LOGIN</label>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label className="username">Username
                            <input className="input" type="text" value={userName}
                                   onChange={handleUserName} />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label className="password">Password
                            <input className="input" type="password" value={password}
                                   onChange={handlePassword} />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td><button type="submit">Login</button></td>
                </tr>
                </tbody>
            </table>
        </form>
    );
}


const LoginPage = () =>
{
    return <div className="loginPage" >{LoginForm()} </div>;
}

export default LoginPage;