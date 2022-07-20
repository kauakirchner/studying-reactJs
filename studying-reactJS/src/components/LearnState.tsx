import React, {useState} from "react";
// pegando o informações do input e renderizando em tela através de um evento
const LearnState = () =>{
    
    const [userName, setUserName] = useState('')
    const handleUserName = (event) =>{
        event.preventDefault()
        setUserName(userName)
        
    }
    return(
        <div className="container">
            <form>
                <input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
                    {userName}
            </form>
            
        </div>
    )
}

export default LearnState

