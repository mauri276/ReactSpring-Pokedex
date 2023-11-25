import React, { useState } from "react";
import Boton from './Boton'
import '../stylesheets/components/Form.css'

function Form (props) {

    const [input, setInput] = useState('');

    const validarInput = (input) => {
        // Elimina cualquier carácter que no sea una letra o comilla simple

        /*
            El símbolo / indica el inicio y el final de la expresión regular.
            El símbolo ^ dentro de los corchetes [] significa que se busca cualquier carácter que no sea uno de los que están dentro de los corchetes.
            El rango a-z significa que se busca cualquier letra minúscula del alfabeto inglés, desde la a hasta la z.
            El rango A-Z significa que se busca cualquier letra mayúscula del alfabeto inglés, desde la A hasta la Z.
            El símbolo ' significa que se busca el carácter de la comilla simple.
            El símbolo g al final de la expresión regular significa que se busca de forma global, es decir, que se encuentran todas las coincidencias posibles en la cadena de texto, no solo la primera.
        */
        input.value = input.value.replace(/[^a-zA-Z']/g, '');
    }

    const manejarCambio = e => {
        setInput(e.target.value);
    }


    const manejarEnvio = e => {
        e.preventDefault();
        if (input != ''){
            // Colocar el texto a enviar en minúsculas antes de ser enviado
            let inputMinusculas = input.toLowerCase()
            props.onSubmit(inputMinusculas);
        }
    }

    return(
        <div className="form_container">
            <form onSubmit={ manejarEnvio }>
                <input 
                    type="text"
                    id="pokemon_input"
                    className="pokemon_input"
                    placeholder="NOMBRE DEL POKEMÓN"
                    onChange={ manejarCambio }
                    onInput={ e => validarInput(e.target) }
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
