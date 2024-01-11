import React from 'react'
import './Hello'
import Hello from "./Hello";


const Welcome = (props) => {
    return(
        <div>
            <Hello />
            <h2>welcome to {props.name} website</h2>
        </div>
    )
}

export default Welcome;