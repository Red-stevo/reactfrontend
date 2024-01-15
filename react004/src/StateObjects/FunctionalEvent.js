import React from "react";



const handle = () =>
{
    console.log("You clicked the functional Component event button");
}
function FunctionalEvent() {
    let message = "Not clicked";
    return(
        <div>
            <h1><u>This is Event Handling.</u></h1>
            <h2>{message}</h2>
            <button onClick={handle}>Click Me</button>
        </div>
    );
}

export default FunctionalEvent;