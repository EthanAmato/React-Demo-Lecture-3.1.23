import ChildComponentExample from "./ChildComponentExample";
import { useState } from "react";

function ParentComponentExample() {


    const [children, setChildren] = useState([]);
    const childrenNames = ["Samantha", "Alex", "Jessica", "Wenwen", "Kris"]

    function addNextChild() {

        //Error Handling
        // Starting w/ 0
        let numChildren = children.length;

        // Always 5 unless someone changes the childrenNames list
        let numNames = childrenNames.length;

        // if numChildren is equal to or greater than the amount of names available
        // we simply don't know any more names! 
        if (numChildren >= numNames) return
        else {
            //(current/most recent version of the state being altered) =>
            setChildren((currentNamesRendered) => {
                // [Samantha, Alex] <- Most Recent Array
                // [Samantha, Alex, Jessica ]

                // []
                // [Samantha]
                // [Samantha, Alex]
                // [Samantha, Alex, Jessica]
                return [...currentNamesRendered, childrenNames[numChildren]]
            })
        }

    }

    //Props: Way for Parent component to share information/data
    //with a child component
    return (
        <>
            <button onClick={addNextChild}>Add Child</button>
            {
                children.map((childName, index) => {
                    return(
                        <ChildComponentExample 
                        // Key = unique identifier for helping react keep track
                        // of components in a list
                            key={index}
                            name = {childName}
                            favoriteNumber = {2}
                        
                        />
                    )
                })
            }
        </>
    )
}

export default ParentComponentExample;