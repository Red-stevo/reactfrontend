const FunctionalListRendering = () =>
{
    const fruitsList = ["Mangoes", "Apples", "Grapes", "Bananas", "Avocados"];

    const elementFruitsList = () =>
    {
        return(
            fruitsList.map((fruit, index) => {
                return(
                    <tr>
                        <td><b>{index}</b></td>
                        <td><b>{fruit}</b></td>
                    </tr>
            );
            })
        );
    }

    return(
        <div>
            <table>{elementFruitsList()}</table>
        </div>
    );

}

export default FunctionalListRendering;