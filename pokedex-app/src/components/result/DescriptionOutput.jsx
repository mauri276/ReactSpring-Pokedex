import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/components/result/DescriptionOutput.css";

function DescriptionOutput({ pokemonData, poweredOn, t }) {
  return (
    <div className={`description_container ${poweredOn ? "on" : "off"}`}>
      <div>
        <p className="description-text">
          {poweredOn
            ? pokemonData?.flavor_text || t.descriptionPlaceholder
            : ""}
        </p>
      </div>
    </div>
  );
}

DescriptionOutput.propTypes = {
  pokemonData: PropTypes.object,
  poweredOn: PropTypes.bool.isRequired,
  t: PropTypes.object.isRequired
};

export default DescriptionOutput;
