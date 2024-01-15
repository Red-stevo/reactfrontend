import {useState} from "react";

const FormHandling = () =>{

    const [userName, setUserName] = useState("");

    const handleName = (event) =>
    {
        console.log(event);
        setUserName(event.target.value);
        console.log(userName);
    }

    const loginForm = () =>
    {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><h1>FORM</h1></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input onChange={handleName} type="text" value={userName}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }


    return (
        <div>
         {loginForm()}
     </div>
 );
}

export default FormHandling;