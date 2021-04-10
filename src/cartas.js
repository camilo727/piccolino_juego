import React, {Component} from 'react';
import './cartas.css';
import ReactCardFlip from "react-card-flip";
import {  } from "module";
export default class Carta extends Component {  
  render() {
    return (
      <div className="carta" onClick={this.props.seleccionarCarta}>
        <ReactCardFlip
          isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
        >
          <div className="portada" key="front"> <img src="./116155595_123015139490634_5186834269466704096_o.jpg" width="125" height=""/></div>
          <div className="contenido" key="back">
          <img src={this.props.icono} width="125" height="125"/>
          </div>
        </ReactCardFlip>
      </div>
    )
  }  
};