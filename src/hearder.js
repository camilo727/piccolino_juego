import React, {Component} from 'react';
import './hearder.css';
export default class header extends Component{
    render(){
        return(
            <header>
                <div className="titulo"> 
                <img src="./icono.png" width="120px" height=""/>
                </div>
                <div className="titulo"><b>Intento:  {this.props.numeroDeIntentos}</b></div>
            </header>
        )
    }
}