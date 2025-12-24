import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import PokemonHintsService from "../services/PokemonHintsService";
import "../stylesheets/components/Form.css";

function Form({ onSubmit, poweredOn, t }) {

  const [input, setInput] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [hints, setHints] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!poweredOn) {
      setHints([]);
      setActiveIndex(-1);
      setInput("");
    }
  }, [poweredOn]);


  useEffect(() => {
    if (!input) return;

    const valor = input.toLowerCase();
    const filtrados = pokemonList
      .filter(name => name.startsWith(valor))
      .slice(0, 20);

    if (filtrados.length) {
      setHints(filtrados);
      setActiveIndex(0);
    } else {
      setHints([t.hint_empty]);
      setActiveIndex(0);
    }
  }, [t, input, pokemonList]);


  useEffect(() => {
    PokemonHintsService.getPokemonNames()
      .then(setPokemonList)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (activeIndex >= 0 && itemsRef.current[activeIndex]) {
      itemsRef.current[activeIndex].scrollIntoView({
        block: "nearest"
      });
    }
  }, [activeIndex]);

  const validarInput = value => value.replace(/[^a-zA-Z']/g, "");

  const manejarCambio = e => {
  const valor = validarInput(e.target.value).toLowerCase();
  setInput(valor);

  if (!valor) {
    setHints([]);
    setActiveIndex(-1);
    return;
  }

  const filtrados = pokemonList
    .filter(name => name.startsWith(valor))
    .slice(0, 20);

  if (filtrados.length) {
    setHints(filtrados);
    setActiveIndex(0);
  } else {
    setHints([t.hint_empty]);
    setActiveIndex(0);
  }
};


  const manejarKeyDown = e => {
    if (!hints.length) 
      return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(prev =>
        prev < hints.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev =>
        prev > 0 ? prev - 1 : hints.length - 1
      );
    }

    if (e.key === "Tab") {
      e.preventDefault();
      setActiveIndex(prev =>
        prev < hints.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      seleccionarHint(hints[activeIndex]);
    }
  };

  const seleccionarHint = pokemon => {
  if (pokemon === t.hint_empty) 
    return;

  setInput(pokemon);
  setHints([]);
  setActiveIndex(-1);
  onSubmit(pokemon);
};


  return (
    <div className="form-row">
      <div className={`form_container ${poweredOn ? "on" : "off"}`}>
        <input
          autoComplete="off"
          id="pokedex-form"
          type="text"
          className="pokemon_input"
          value={input}
          disabled={!poweredOn}
          onChange={manejarCambio}
          onKeyDown={manejarKeyDown}
          placeholder={t.search}
        />

        <div className="pokemon-hints-container">
          <ul className="pokemon-hints">
            {hints.map((pokemon, index) => (
              <li
                key={pokemon}
                ref={el => (itemsRef.current[index] = el)}
                className={index === activeIndex ? "active" : ""}
                onClick={() => seleccionarHint(pokemon)}
              >
                {pokemon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  poweredOn: PropTypes.bool.isRequired,
  t: PropTypes.shape({
    search: PropTypes.string.isRequired,
    hint_empty: PropTypes.string.isRequired,
  }).isRequired
};

export default Form;
