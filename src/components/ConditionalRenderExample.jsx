import { useState } from "react";

export default function ConditionalRenderExample() {

    const [isFlip, setIsFlip] = useState(true);

    function handleFlipFlop() {
        setIsFlip(!isFlip)
    }

    return (
        <>
            <h1>{isFlip ? "Flip" : "Flop"}</h1>
            <button onClick={handleFlipFlop}>Flip Flop</button>
        </>
    );
}

