import React from "react";

const Steve = (props) => {
    return (
        <div>
            <h1>My name is {props.name}</h1>
            <p>
                <h2><u>This is my message to you</u></h2>
                {props.children}
            </p>
        </div>
    );
}

export default Steve;