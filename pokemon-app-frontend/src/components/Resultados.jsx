import React from "react";
import Stats from './Stats.jsx';
import '../stylesheets/components/Resultados.css';
import DescriptionOutput from './result/DescriptionOutput.jsx'

function Resultados(props) {

    const extraerTipo = data => {
        if (data) {
            if (data.tipo2 != null) {
                return data.tipo1 + ',' + data.tipo2;
            } else {
                return data.tipo1;
            }
        } else {
            return "Type";
        }
    }

    return (
        <>
            <div className="col-pantalla-type">
                <DescriptionOutput />
                {/* TODO agregar tipo en la pantalla con extraerTipo(props.pokemonData)*/}
                <div className="pantalla-pokedex_container">
                    {props.pokemonData ? <h2 className="pokemon_name">{props.pokemonData.name}</h2> : null}
                    <div className="pokemon-information_container">
                        <div className="pokemon-img_container">
                            {props.pokemonData ? <img src={props.pokemonData.imagenOficial} className="pokemon_img" alt="Img del Pokemon" /> : null}
                        </div>
                        <div className="stats_container">
                            {props.pokemonData ? <Stats pokemonData={props.pokemonData} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resultados;