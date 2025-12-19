import React, { useState } from "react";
import ClientService from "../services/ClientService";
import Form from "./Form";
import Resultados from "./Resultados";
import "../stylesheets/components/Pokedex.css";

function Pokedex() {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [poweredOn, setPoweredOn] = useState(false);

    const buscarPokemon = pokemon => {
        if (!poweredOn)
            return;

        setLoading(true);
        setPokemonData(null);

        ClientService.getPokemon(pokemon)
            .then(res => setPokemonData(res.data))
            .catch(() => setPokemonData({ error: true }))
            .finally(() => setLoading(false));
    };

    return (
        <div className="pokedex-body_container">
            <div className="power-button-container">
                <button
                    className={`power-button ${poweredOn ? "on" : ""}`}
                    onClick={() => {
                        setPoweredOn(v => {
                            const newState = !v;
                            if (!newState)
                                setPokemonData(null);
                            return newState;
                        });
                    }}
                />

            </div>

            <div className={`pokedex-content-container`}>
                <Resultados
                    pokemonData={pokemonData}
                    loading={loading}
                    poweredOn={poweredOn}
                />
                <Form
                    onSubmit={buscarPokemon}
                    poweredOn={poweredOn}
                />
            </div>
        </div>
    );
}

export default Pokedex;
