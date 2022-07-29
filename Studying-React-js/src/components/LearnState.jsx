import React, { useState } from "react";


const LearnState = () => {
    const [userName, setName] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [userCep, setCep] = useState('')
    let [getUserFullAdress, setFullAddress] = useState([])

    const setUserInfos = () => {
        setName(userName);
        setPassword(userPassword);
        setEmail(userEmail);
        setConfirmedPassword(confirmedPassword);

    }

    async function handleApiCep() {
        setCep(userCep)
        const url = `https://viacep.com.br/ws/${userCep}/json/`
        axios.get(url).then((response) => {
            setFullAddress(getUserFullAdress)
            getUserFullAdress = response.data
            console.log(getUserFullAdress)
        })
    }

    return (
        <div className="container">
            <h1>Cadastre-se</h1>
            <div className="column row">
                <label htmlFor="">Nome</label>
                <input type="text" value={userName} placeholder="Insira seu nome" onChange={event => setName(event.target.value)} />
            </div>
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
            {userPassword !== confirmedPassword && (
                <p>Senhas não conferem</p>
            )}
            {userPassword === confirmedPassword && (
                <p>Cadastro feito com sucesso</p>
            )}
            <div>
                <button className="btn-send" onClick={setUserInfos}>ENVIAR</button>
            </div>
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
                {getUserFullAdress}
            </div>
        </div>
    )
}

export default LearnState