import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/components/Stats.css";

function Stats({ pokemonData, t }) {
  if (!pokemonData?.stats) return null;

  const firstColumnStats = ["hp", "attack", "defense"];
  const secondColumnStats = ["special-attack", "special-defense", "speed"];

  const statsColumn1 = pokemonData.stats.filter(stat =>
    firstColumnStats.includes(stat.key)
  );

  const statsColumn2 = pokemonData.stats.filter(stat =>
    secondColumnStats.includes(stat.key)
  );

  const renderStat = (stat) => (
    <p className="pokemon_stat" key={stat.key}>
      {t.stats[stat.key] || stat.key}: {stat.base_stat ?? "N/A"}
    </p>
  );

  return (
    <div className="pokemon_stats_container">
      <div className="pokemon_stats_column">
        {statsColumn1.map(renderStat)}
      </div>
      <div className="pokemon_stats_column">
        {statsColumn2.map(renderStat)}
      </div>
    </div>
  );
}

Stats.propTypes = {
  pokemonData: PropTypes.shape({
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        base_stat: PropTypes.number
      })
    )
  }),
  t: PropTypes.shape({
    stats: PropTypes.object.isRequired
  }).isRequired
};

export default Stats;
