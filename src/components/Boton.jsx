import React from "react";
import '../css/Boton.css';

function Boton({ pass }) {
    if (pass !== "252525") return null;

    return (
    <>
        <button className="btn" type="button" >ingresar</button>
    </>
    );
}

export default Boton;