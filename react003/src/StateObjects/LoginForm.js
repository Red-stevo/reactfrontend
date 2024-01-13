const LoginForm = (props) =>
{

    const handle = () =>
    {
        console.log(props.password);
    }


    return(<div>
        <form>
            <table>
                <tbody>
                <tr>
                    <td>User Name </td>
                    <td><input id="Name" name="userName" type="Text"/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="password" name="password"/></td>
                </tr>

                <tr>
                    <td></td>
                    <td><button onClick={handle}>Login</button></td>
                </tr>
                </tbody>
            </table>
        </form>
    </div>);
}

export default LoginForm;