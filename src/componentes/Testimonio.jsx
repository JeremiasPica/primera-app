import React from "react";
import '../css/Testimonio.css';


function Testimonio(props) {
    return (

      <div className="contenedor-testimonio">

        <img src={require(`../imgs/${props.imagen}.png`)} className="imagen-testimono" alt="foto de Emma"/>

        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
          <p className="texto-testimonio">{props.testimonio}</p>
        </div>

      </div>
    );
};


export default Testimonio;