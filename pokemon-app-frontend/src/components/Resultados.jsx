import React from "react";
import Stats from "./Stats.jsx";
import "../stylesheets/components/Resultados.css";
import DescriptionOutput from "./result/DescriptionOutput.jsx";
import PropTypes from "prop-types";

function Resultados({ pokemonData, loading, poweredOn, t }) {

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

  const extraerTipo = (data) => {
    if (!data) return "";
    const t1 = data.tipo1
      ? `${tipoEmojis[data.tipo1.toLowerCase()] || ""} ${data.tipo1}`
      : "";
    const t2 = data.tipo2
      ? `, ${tipoEmojis[data.tipo2.toLowerCase()] || ""} ${data.tipo2}`
      : "";
    return t1 + t2;
  };

  return (
    <div className="col-pantalla-type">
      <DescriptionOutput
        pokemonData={pokemonData}
        poweredOn={poweredOn}
        t={t}
      />

      <div className={`pantalla-pokedex_container ${poweredOn ? "on" : "off"}`}>

        {poweredOn && loading && (
          <div className="loading-overlay">
            <p className="loading-text">{t.searching}</p>
            <p className="loading-dots">● ● ●</p>
          </div>
        )}

        {poweredOn && pokemonData?.error && !loading && (
          <div className="info-overlay error">
            <p className="info-text">{t.notFound}</p>
          </div>
        )}

        {pokemonData && !pokemonData.error && !loading && (
          <>
            <h6 className="pokemon_name">
              {extraerTipo(pokemonData)}
            </h6>

            <h2 className="pokemon_name">
              {pokemonData.name}
            </h2>

            <div className="pokemon-information_container">
              <div className="pokemon-img_container">
                <img
                  src={pokemonData.imagenOficial}
                  className="pokemon_img"
                  alt={t.pokemonImageAlt}
                />
              </div>

              <Stats pokemonData={pokemonData} t={t} />
            </div>
          </>
        )}

      </div>
    </div>
  );
}

Resultados.propTypes = {
  pokemonData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.shape({
      error: PropTypes.bool
    })
  ]),
  loading: PropTypes.bool.isRequired,
  poweredOn: PropTypes.bool.isRequired,
  t: PropTypes.object.isRequired
};


export default Resultados;
