import React, {useCallback, useState, useEffect} from "react";

// Memorizando a função handlePlus para que não se crie novas instâncias quando o botão for clicado.
const LearnUseCallBack = () => {
    const [counter, setCounter] = useState(0)

    const handlePlus = useCallback(() => {
        setCounter((prevState) => prevState + 1)
    }, [])

    useEffect(() => {
        
        alert('Começou')
        
    }, []);

    useEffect(() => {
        if(counter >= 10){
            alert('Ganhou')
        }
        console.log(counter)
    }, [counter]);

    return (
        <div className="container">
            <h1>{counter}</h1>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}


export default LearnUseCallBack