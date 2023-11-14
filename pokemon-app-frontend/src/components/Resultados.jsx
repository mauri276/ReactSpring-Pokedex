import React, { useState } from "react";

function Resultados ( pokemonData ) {
    const { data } = pokemonData;

    if (!data) { 
        return <p>No hay datos</p>;
    }
    
    return (
        <>
            <h2>
                {data.name}
            </h2>
        </>
    );
}

export default Resultados;