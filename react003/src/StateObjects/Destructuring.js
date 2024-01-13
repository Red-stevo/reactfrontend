import React from "react";

const Destructuring = (props) => {

    const {fName, sName, lName} = props;


    return (
        <div>
            <h1>My names are : {fName} {sName} {lName}</h1>
        </div>
    );
}

export  default  Destructuring;