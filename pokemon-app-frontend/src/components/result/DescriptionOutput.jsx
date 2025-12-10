import React from "react";
import '../../stylesheets/components/result/DescriptionOutput.css'

function DescriptionOutput(props) {
    return (
        <>
            <div className="description_container">
                <div>
                    <p className="description-text">
                        {props.pokemonData ? props.pokemonData.flavor_text : "Description"}
                    </p>
                </div>
            </div>
        </>
    )
}

export default DescriptionOutput;