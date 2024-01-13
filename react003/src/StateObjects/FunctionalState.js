import {useState} from "react";

const FunctionalState = () =>
{
    const [answer, setAnswer] = useState("??") //useState is a hook we get from React.

    const handle = () => {
        setAnswer("William Ruto.")
    }

    return (
        <div>
            <h1><u>This Are Functional States</u></h1>
            <h1>Who is the president of kenya?. Ans is : {answer}</h1>
            <button onClick={handle}>Get answer</button>
        </div>
    );
}

export default FunctionalState;