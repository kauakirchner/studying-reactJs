import React, { useState } from "react";
import { render } from "react-dom";
import Button from '../Button'

const LearnState = () => {
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState(null)
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [userCep, setCep] = useState('')
    const [userFullAdress, setFullAddress] = useState([])
    const [shouldShowMessage, setShouldShowMessge] = useState(false)

    const handleClickForm = () => {
        setPassword(userPassword);
        setEmail(userEmail);
        setConfirmedPassword(confirmedPassword);
        setShouldShowMessge(true)
    }

    const isPasswordCorrect = () => {
        return userPassword === confirmedPassword 
    }

    const renderPasswordMessage = () => {
        if (!shouldShowMessage) {
            return null
        }

        if (userPassword && isPasswordCorrect()) {
          return  <p>Cadastro feito com sucesso</p> 
        }

        if (userPassword &&  confirmedPassword &&!isPasswordCorrect())  {
          return  <p>Senhas não conferem</p>
        }        
    }

    async function handleApiCep() {
        setCep(userCep)
        const url = `https://viacep.com.br/ws/${userCep}/json/`
        axios.get(url).then((response) => {
            setFullAddress(response.data)
        })
    }

    return (
        <div className="container">
            <h1>Cadastre-se</h1>
            <br />
            <div className="column row">
                <label htmlFor="">Email</label>
                <input type="email" value={userEmail} placeholder="Insira seu email" onChange={event => setEmail(event.target.value)} />
            </div>
            <br />
            <div className="column">
                <label htmlFor="">Senha</label>
                <input type="passwoed" value={userPassword} placeholder="Insira sua senha" onChange={event => setPassword(event.target.value)} />
            </div>
            <br />
            <div className="column">
                <label htmlFor="">Confirme sua senha</label>
                <input type="passwoed" value={confirmedPassword} placeholder="Confirme sua senha" onChange={event => setConfirmedPassword(event.target.value)} />
            </div>
            <br />
            {renderPasswordMessage()}

                <Button onClick={handleClickForm} text="Clique"/>
            <br />
            <div>
                <h3>Faça uma consulta na api via cep</h3>
                <input type="passwoed" value={userCep} placeholder="Insira seu cep" onChange={event => setCep(event.target.value)} />
                <button onClick={handleApiCep}>Consultar cep</button>
                <br />
                {userCep &&(
                   <div>
                    <span>Olhe o console</span>
                   </div>
                )}
                {}
            </div>
        </div>
    )
}

export default LearnState