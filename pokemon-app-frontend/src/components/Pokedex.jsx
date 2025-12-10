import React, { useState } from "react";
import ClientService from "../services/ClientService";
import Form from "./Form";
import Resultados from "./Resultados"
import '../stylesheets/components/Pokedex.css';

function Pokedex(props) {

    const [pokemonData, setPokemonData] = useState(null);

    const buscarPokemon = pokemon => {
        ClientService.getPokemon(pokemon).then(response => {
            console.log(response.data);
            setPokemonData(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="main-pokedex_container">
            <div className="col-1">
                <Resultados pokemonData={pokemonData} />
                <Form
                    onSubmit={buscarPokemon}
                />
            </div>
        </div>
    )
}

export default Pokedex;