import React from "react";
import '../stylesheets/components/Boton.css';

function Boton({ btn_clear, onClick }) {
    return (
        <button
            type={btn_clear ? 'button' : 'submit'}
            className="form_btn"
            onClick={onClick}
        >
            <img
                src={btn_clear ? '/img/btn_clear.png' : '/img/btn_submit.png'}
            />
        </button>
    );
}


export default Boton;