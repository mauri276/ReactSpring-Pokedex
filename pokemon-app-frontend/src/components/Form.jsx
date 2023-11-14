import React, { useState } from "react";

function Form (props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        props.onSubmit(input);
    }

    return(
        <form onSubmit={ manejarEnvio }>
            <input 
                type="text"
                className="pokemon-input"
                placeholder="Escribe el nombre de un Pokemon"
                onChange={ manejarCambio }
            />
            <button className="btn-input">Buscar Pokemon</button>
        </form>
    )
}

export default Form;
