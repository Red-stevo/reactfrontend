const ConditionalRendering = () =>{
    let condition = null;

    //this is conditional rendering using a ternary operator.
    return(condition?
        (<div><h1>Hello there steve</h1></div>)
        : (<div><h1>Hello there bree</h1></div>)
    );

    //we can also conditionally render elements using element variables that hold
    //jsx element that can be returned conditionally
    /*
    *const element1 = <div><h1>Hello there steve</h1></div>;
    * const element2 = <div><h1>Hello there bree</h1></div>
    * condition ? element1 : element2 ;
    *
     */
}

export default ConditionalRendering;