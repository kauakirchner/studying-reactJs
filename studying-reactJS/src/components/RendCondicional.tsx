import React, { useState } from "react";
import LearnState from "./LearnState";

//Renderização condicional
const RendCondicional = () =>{

    const [secretText, setText] = useState(false)
    const handleSecretText = () =>{
        setText(!secretText)
    }

    return (
        <div className="container">
            <br />
            {secretText &&(
                <LearnState />
            )}
            <br />
            <button onClick={handleSecretText}>Ver/Esconder</button>
        </div>
    )
}

export default RendCondicional