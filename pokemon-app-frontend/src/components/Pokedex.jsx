import React, { useState, useEffect } from "react";
import ClientService from "../services/ClientService";
import Form from "./Form";
import Resultados from "./Resultados";
import "../stylesheets/components/Pokedex.css";
import translations from "../i18n/translations.json";

function Pokedex() {
  const [lang, setLang] = useState("es");
  const t = translations[lang];

  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [poweredOn, setPoweredOn] = useState(false);
  const [lastPokemon, setLastPokemon] = useState(null);

  const buscarPokemon = (pokemon) => {
    if (!poweredOn) return;

    setLoading(true);
    setPokemonData(null);
    setLastPokemon(pokemon);

    ClientService.getPokemon(pokemon, lang)
      .then((res) => setPokemonData(res.data))
      .catch(() => setPokemonData({ error: true }))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!poweredOn || !lastPokemon) return;

    setLoading(true);

    ClientService.getPokemon(lastPokemon, lang)
      .then((res) => setPokemonData(res.data))
      .catch(() => setPokemonData({ error: true }))
      .finally(() => setLoading(false));

  }, [lang]);

  return (
    <div className="pokedex-body_container">
      <div className="power-button-container">
        <button
          className={`power-button ${poweredOn ? "on" : ""}`}
          onClick={() => {
            setPoweredOn((v) => {
              const newState = !v;
              if (!newState) {
                setPokemonData(null);
                setLastPokemon(null);
              }
              return newState;
            });
          }}
        />

        <span>{t.power}</span>

        <button
          className="lang-toggle"
          onClick={() => setLang((l) => (l === "es" ? "en" : "es"))}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>

      <div className="pokedex-content-container">
        <Resultados
          pokemonData={pokemonData}
          loading={loading}
          poweredOn={poweredOn}
          t={t}
        />

        <Form
          onSubmit={buscarPokemon}
          poweredOn={poweredOn}
          t={t}
        />
      </div>
    </div>
  );
}

export default Pokedex;
