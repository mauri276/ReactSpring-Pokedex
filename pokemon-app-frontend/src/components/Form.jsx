import React, { useState } from "react";
import Boton from "./Boton";
import "../stylesheets/components/Form.css";

function Form(props) {
    const [input, setInput] = useState("");

    const validarInput = (value) => {
        /*
            / indica el inicio y el final de la expresión regular.
            ^ dentro de los corchetes [] significa que se busca cualquier carácter que no sea uno de los que están dentro de los corchetes.
            a-z significa que se busca cualquier letra minúscula del alfabeto inglés, desde la a hasta la z.
            A-Z significa que se busca cualquier letra mayúscula del alfabeto inglés, desde la A hasta la Z.
            ' significa que se busca el carácter de la comilla simple.
            g al final de la expresión regular significa que se busca de forma global, es decir, que se encuentran todas las coincidencias posibles en la cadena de texto, no solo la primera.
        */
        return value.replace(/[^a-zA-Z']/g, "");
    };

    const manejarCambio = (e) => {
        const valorLimpio = validarInput(e.target.value);
        setInput(valorLimpio);
    };

    const manejarClear = () => {
        setInput("");
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (input !== "") {
            props.onSubmit(input.toLowerCase());
        }
    };

    return (
        <div className="form_container">
            <form onSubmit={manejarEnvio}>
                <input
                    type="text"
                    id="pokemon_input"
                    className="pokemon_input"
                    placeholder="NOMBRE DEL POKEMÓN"
                    value={input}
                    onChange={manejarCambio}
                />

                <div className="btn_group">
                    <Boton btn_clear={true} onClick={manejarClear} />
                    <Boton btn_clear={false} />
                </div>
            </form>
        </div>
    );
}

export default Form;
