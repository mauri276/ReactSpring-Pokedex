import React from "react";
import "../../stylesheets/components/result/DescriptionOutput.css";

function DescriptionOutput({ pokemonData, poweredOn }) {
    return (
        <div className={`description_container ${poweredOn ? "on" : "off"}`}>
            <div>
                <p className="description-text">
                    {poweredOn ? (pokemonData?.flavor_text || "Description") : ""}
                </p>
            </div>
        </div>

    );
}

export default DescriptionOutput;
