const RenderingLists = () => {

    let names = ["bree", "steve", "bob", "faith", "brad"];
    let names2 = names.map((name) => {return <h1>Hello there {name}</h1>});

    // let [name1, name2, name3, , name5] = names2; this is array destructuring.
    return(
        <div>
            {names2}
        </div>
    );
}

export default RenderingLists;