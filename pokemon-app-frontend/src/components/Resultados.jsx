import React from "react";
import Stats from "./Stats.jsx";
import "../stylesheets/components/Resultados.css";
import DescriptionOutput from "./result/DescriptionOutput.jsx";
import PropTypes from "prop-types";

function Resultados({ pokemonData, loading, poweredOn, t }) {

  const tipoEmojis = {
    fire: { emoji: '🔥', label: t.types.fire },
    water: { emoji: '💧', label: t.types.water },
    grass: { emoji: '🌿', label: t.types.grass },
    electric: { emoji: '⚡', label: t.types.electric },
    ice: { emoji: '❄️', label: t.types.ice },
    fighting: { emoji: '🥊', label: t.types.fighting },
    poison: { emoji: '☠️', label: t.types.poison },
    ground: { emoji: '🌍', label: t.types.ground },
    flying: { emoji: '🕊️', label: t.types.flying },
    psychic: { emoji: '🔮', label: t.types.psychic },
    bug: { emoji: '🐛', label: t.types.bug },
    rock: { emoji: '🪨', label: t.types.rock },
    ghost: { emoji: '👻', label: t.types.ghost },
    dragon: { emoji: '🐉', label: t.types.dragon },
    dark: { emoji: '🌑', label: t.types.dark },
    steel: { emoji: '⚙️', label: t.types.steel },
    fairy: { emoji: '✨', label: t.types.fairy },
    normal: { emoji: '🔘', label: t.types.normal },
};


  const extraerTipo = data => {
  if (!data) return "";
  const t1 = data.tipo1 ? `${tipoEmojis[data.tipo1].emoji} ${tipoEmojis[data.tipo1].label}` : "";
  const t2 = data.tipo2 ? `, ${tipoEmojis[data.tipo2].emoji} ${tipoEmojis[data.tipo2].label}` : "";
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
