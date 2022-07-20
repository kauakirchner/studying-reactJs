import React, { useState } from "react";

//Renderização condicional
const RendCondicional = () =>{

    const [tituloEscondito, setTitulo] = useState(false)
    const handleTitulo = () =>{
        setTitulo(!tituloEscondito)
    }
    return (
        <div className="container">
            {tituloEscondito && (
                <h1>Título</h1>
            )}
            <button onClick={handleTitulo}>Clique</button>
        </div>
    )
}

export default RendCondicional