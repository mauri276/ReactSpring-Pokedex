import React from "react";
import '../stylesheets/components/Stats.css';

function Stats(props) {
    if ( !props.pokemonData.stats) {
        return null;
    }
    
    return (
        <>
            {props.pokemonData.stats.map((stat) => (
                <p className="pokemon_stat">{stat.name || 'N/A'}: {stat.base_stat || 'N/A'}</p>
            ))}
        </>
    );
}


export default Stats;