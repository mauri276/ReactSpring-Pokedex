import React, { useState } from "react";
import Boton from './Boton'
import '../stylesheets/components/Form.css'

function Form (props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        let valorActual = e.target.value.toLowerCase(); 
        setInput(valorActual);


    }


    const manejarEnvio = e => {
        e.preventDefault();
        props.onSubmit(input);
        
    }

    return(
        <div className="form_container">
            <form onSubmit={ manejarEnvio }>
                <input 
                    type="text"
                    className="pokemon_input"
                    placeholder="NOMBRE DEL POKEMÓN"
                    onChange={ manejarCambio }
                />
                <div className="btn_group">
                    <Boton btn_clear = {true} />
                    <Boton btn_clear = {false} />
                </div>
            </form>
        </div>
    )
}

export default Form;
