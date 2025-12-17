import React, { useState } from "react";
import ClientService from "../services/ClientService";
import Form from "./Form";
import Resultados from "./Resultados";
import '../stylesheets/components/Pokedex.css';

function Pokedex() {

    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const buscarPokemon = pokemon => {
        setLoading(true);
        setPokemonData(null);
        setError(null);

        ClientService.getPokemon(pokemon)
            .then(response => {
                setPokemonData(response.data);
            })
            .catch(() => {
                setError("POKÉMON NO ENCONTRADO");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="pokedex-body_container">
            <div className="pokedex-content-container">
                <Resultados
                    pokemonData={pokemonData}
                    loading={loading}
                    error={error}
                />
                <Form onSubmit={buscarPokemon} />
            </div>
        </div>
    );
}

export default Pokedex;
