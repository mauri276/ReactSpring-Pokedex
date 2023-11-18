import React, { useState } from "react";
import '../stylesheets/components/Resultados.css';

function Resultados ( props ) {
    
    return (
        <>
            <div className="pantalla-pokedex_container">
                <div className="pokemon-img_container">
                    {/* <img src={props.pokemonData.imagenOficial} className="pokemon_img" alt="Img del Pokemon" /> */}
                </div>
            </div>
            <p>
                {/* Descripción: {props.pokemonData.flavor_text} */}
            </p>
        </>
    );
}

export default Resultados;