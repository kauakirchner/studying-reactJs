import React, {useState} from "react";
// pegando o informações do input e renderizando em tela.
const LearnState = () =>{
    
    const [userName, setUserName] = useState('')
    const handleUserName = () =>{
        setUserName(userName) 
    }
    return(
        <div className="container">
            <form>
                <label htmlFor="">Digite um texto</label>
                <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
                    {userName}
            </form>
            <br />
            
        </div>
    )
}

export default LearnState

