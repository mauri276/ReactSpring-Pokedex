import React from "react";
import '../stylesheets/components/Stats.css';

function Stats({ pokemonData }) {
    if (!pokemonData.stats)
        return null;

    const firstColumnStats = ['Vida', 'Ataque', 'Defensa'];
    const secondColumnStats = ['Ataque especial', 'Defensa especial', 'Velocidad'];

    const statsColumn1 = pokemonData.stats.filter(stat => firstColumnStats.includes(stat.name));
    const statsColumn2 = pokemonData.stats.filter(stat => secondColumnStats.includes(stat.name));

    return (
        <div className="pokemon_stats_container">
            <div className="pokemon_stats_column">
                {statsColumn1.map((stat, index) => (
                    <p className="pokemon_stat" key={stat.name + index}>
                        {stat.name || 'N/A'}: {stat.base_stat || 'N/A'}
                    </p>
                ))}
            </div>
            <div className="pokemon_stats_column">
                {statsColumn2.map((stat, index) => (
                    <p className="pokemon_stat" key={stat.name + index}>
                        {stat.name || 'N/A'}: {stat.base_stat || 'N/A'}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Stats;
