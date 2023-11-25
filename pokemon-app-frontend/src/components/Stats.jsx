import React from "react";
import '../stylesheets/components/Stats.css';

function Stats(props) {

    if ( !props.pokemonData.stats) {
        return null;
    }
    
    return (
        <>
            {props.pokemonData.stats.map((stat, index) => ( 
                <p className="pokemon_stat" key={stat.name + index}>
                    {stat.name || 'N/A'}: {stat.base_stat || 'N/A'}
                </p> 
            ))}
        </>
    );
}


export default Stats;