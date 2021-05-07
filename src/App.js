import Hearder from "./hearder";
import Tablero from "./tablero";
import "./App.css";
import React, { Component } from "react";

import construir_baraja from './utils/construir_baraja';

const getEstadoInicial = () => {
  const baraja = construir_baraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 0   
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }
  render() {
    return (
      <div className="App">
        <Hearder 
         numeroDeIntentos={this.state.numeroDeIntentos}
        />
        <Tablero 
         baraja={this.state.baraja}
         baraja={this.state.baraja}
         parejaSeleccionada={this.state.parejaSeleccionada}
         seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }
 
  seleccionarCarta(carta) {
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinida
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    });

    if (parejaSeleccionada.length === 2) {
       this.compararPareja(parejaSeleccionada);
    }
  }
  compararPareja(parejaSeleccionada) {
    this.setState({estaComparando: true});

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return {...carta, fueAdivinada: true};
        });
      }

      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1
      })
    }, 1000)
  }

  verificarSiHayGanador(baraja) {
    if (
      baraja.filter((carta) => !carta.fueAdivinada).length === 0
    ) 
    {
      window.open("https://piccolino.com.co/index.php/persona_controler/reguistro");
      window.location.replace('');
    }
  }

  resetearPartida() {
    this.setState(
      getEstadoInicial()
    );
  }
  
}

export default App;