import React, { useState } from "react";
import ClientService from "../services/ClientService";
import Form from "./Form";
import Resultados from "./Resultados"

function Pantalla (props) {

    const [pokemonData, setPokemonData] = useState (null);

    const buscarPokemon = pokemon => {
        ClientService.getPokemon(pokemon).then(response => {
            console.log(response.data);
            setPokemonData(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    return(
        <>
            <div className="main-container">
                
                <Form 
                    onSubmit={ buscarPokemon }
                />
                <Resultados pokemonData = { pokemonData } />
            </div>
        </>
    )
}

export default Pantalla;