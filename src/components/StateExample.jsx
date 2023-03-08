import { useState } from "react";

function StateExample() {
    //First refers to the value of a variable
    //Second is a callback function that will update the first variable / value
    const [counter, setCounter] = useState(0);
    const [myAge, setMyAge] = useState(23);
    //counter = 0


    function addToCounter() {
        //On refresh - the counter = 0
        //Not optimal - with more complex examples updating state
        //Can be finnicky due to how react will refresh and rerender content
        setCounter((curr) => curr + 1);

        // counter = counter + 1;
        //Correct way to update state based on prev state value:
        // setCounter((mostRecentValue)=>{
        //     return mostRecentValue+1
        // })
    }

    return(
        <>
            <h1>You have pushed the button {counter} times</h1>
            <button onClick={addToCounter}>Add +1</button>
            <h1>I am {myAge} years Old</h1>
        </>
    )
}

export default StateExample