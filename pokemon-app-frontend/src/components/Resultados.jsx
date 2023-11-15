import React, { useState } from "react";

function Resultados ( props ) {

    if (!props.pokemonData) { 
        return <p>No hay datos</p>;
    }
    
    return (
        <>
            <h2>  
                Nombre: {props.pokemonData.name}
            </h2>
            <p>
                Descripción: {props.pokemonData.flavor_text}
            </p>
        </>
    );
}

export default Resultados;