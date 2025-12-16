import React from "react";
import Stats from './Stats.jsx';
import '../stylesheets/components/Resultados.css';
import DescriptionOutput from './result/DescriptionOutput.jsx'

function Resultados(props) {

    const extraerTipo = data => {
        if (!data)
            return 'Type';

        const tipo1 = data.tipo1 ? `${tipoEmojis[data.tipo1.toLowerCase()] || ''} ${data.tipo1}` : '';
        const tipo2 = data.tipo2 ? `, ${tipoEmojis[data.tipo2.toLowerCase()] || ''} ${data.tipo2}` : '';

        return tipo1 + tipo2;
    }

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



    return (
        <>
            <div className="col-pantalla-type">
                <DescriptionOutput pokemonData={props.pokemonData} />
                <div className="pantalla-pokedex_container">
                    {props.pokemonData ? <h6 className="pokemon_name">{extraerTipo(props.pokemonData)}</h6> : null}
                    {props.pokemonData ? <h2 className="pokemon_name">{props.pokemonData.name}</h2> : null}
                    <div className="pokemon-information_container">
                        <div className="pokemon-img_container">
                            {props.pokemonData ? <img src={props.pokemonData.imagenOficial} className="pokemon_img" alt="Img del Pokemon" /> : null}
                        </div>
                        {props.pokemonData ? <Stats pokemonData={props.pokemonData} /> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resultados;