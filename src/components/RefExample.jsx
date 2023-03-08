import { useRef, useState } from "react"


function RefExample() {

    const [isUppercase, setIsUppercase] = useState(false);
    const inputRef = useRef();

    function swapCase() {
        const currentVal = inputRef.current.value;
        inputRef.current.value = isUppercase ? currentVal.toLowerCase() : currentVal.toUpperCase();
        setIsUppercase(!isUppercase);
    }

    function printref() {
        console.log(inputRef)
        console.log(inputRef.current)
        console.log(inputRef.current.value)
    }



    return (
        <>
            <input type="text" ref={inputRef} placeholder="Put something cool here" />
            <button onClick={swapCase}>Swap Case</button><br/>
            <button onClick={printref}>Print the Ref</button>
        </>
    )
}

export default RefExample