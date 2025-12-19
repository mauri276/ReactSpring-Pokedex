import React from "react";
import Stats from "./Stats.jsx";
import "../stylesheets/components/Resultados.css";
import DescriptionOutput from "./result/DescriptionOutput.jsx";

function Resultados({ pokemonData, loading, error, poweredOn }) {

    const tipoEmojis = {
        fire: '🔥',
        water: '💧',
        grass: '🌿',
        electric: '⚡',
        ice: '❄️',
        fighting: '🥊',
        poison: '☠️',
        ground: '🌍',
        flying: '🕊️',
        psychic: '🔮',
        bug: '🐛',
        rock: '🪨',
        ghost: '👻',
        dragon: '🐉',
        dark: '🌑',
        steel: '⚙️',
        fairy: '✨',
        normal: '🔘',
    };

    const extraerTipo = data => {
        if (!data) return "";
        const t1 = data.tipo1 ? `${tipoEmojis[data.tipo1.toLowerCase()] || ""} ${data.tipo1}` : "";
        const t2 = data.tipo2 ? `, ${tipoEmojis[data.tipo2.toLowerCase()] || ""} ${data.tipo2}` : "";
        return t1 + t2;
    };

    return (
        <div className="col-pantalla-type">
            <DescriptionOutput
                pokemonData={pokemonData}
                poweredOn={poweredOn}
            />

            <div className={`pantalla-pokedex_container ${poweredOn ? "on" : "off"}`}>

                {poweredOn && loading && (
                    <div className="loading-overlay">
                        <p className="loading-text">BUSCANDO</p>
                        <p className="loading-dots">● ● ●</p>
                    </div>
                )}

                {poweredOn && error && !loading && (
                    <div className="info-overlay error">
                        <p className="info-text">{error}</p>
                    </div>
                )}

                {pokemonData && !loading && (
                    <>
                        <h6 className="pokemon_name">{extraerTipo(pokemonData)}</h6>
                        <h2 className="pokemon_name">{pokemonData.name}</h2>

                        <div className="pokemon-information_container">
                            <div className="pokemon-img_container">
                                <img
                                    src={pokemonData.imagenOficial}
                                    className="pokemon_img"
                                    alt="Img del Pokemon"
                                />
                            </div>
                            <Stats pokemonData={pokemonData} />
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default Resultados;