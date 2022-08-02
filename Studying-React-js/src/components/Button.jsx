import React from "react";
import '../styles/button.css'

const Button = (props) => {
    return (
        <div className="btn-container">
            <button onClick={props.onClick} className="btn">{props.text}</button>
        </div>
    )
}

export default Button