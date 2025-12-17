import React from "react";
import Stats from './Stats.jsx';
import '../stylesheets/components/Resultados.css';
import DescriptionOutput from './result/DescriptionOutput.jsx';

function Resultados(props) {

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
        if (!data) return 'Type';

        const tipo1 = data.tipo1
            ? `${tipoEmojis[data.tipo1.toLowerCase()] || ''} ${data.tipo1}`
            : '';

        const tipo2 = data.tipo2
            ? `, ${tipoEmojis[data.tipo2.toLowerCase()] || ''} ${data.tipo2}`
            : '';

        return tipo1 + tipo2;
    };

    return (
        <div className="col-pantalla-type">
            <DescriptionOutput pokemonData={props.pokemonData} />

            <div className="pantalla-pokedex_container">

                {props.loading && (
                    <div className="loading-overlay">
                        <p className="loading-text">BUSCANDO</p>
                        <p className="loading-dots">● ● ●</p>
                    </div>
                )}

                {props.error && !props.loading && (
                    <div className="info-overlay error">
                        <p className="info-text">{props.error}</p>
                    </div>
                )}

                {props.pokemonData && (
                    <>
                        <h6 className="pokemon_name">
                            {extraerTipo(props.pokemonData)}
                        </h6>

                        <h2 className="pokemon_name">
                            {props.pokemonData.name}
                        </h2>

                        <div className="pokemon-information_container">
                            <div className="pokemon-img_container">
                                <img
                                    src={props.pokemonData.imagenOficial}
                                    className="pokemon_img"
                                    alt="Img del Pokemon"
                                />
                            </div>
                            <Stats pokemonData={props.pokemonData} />
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default Resultados;
