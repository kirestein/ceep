import React, { Component } from "react";
import CardNotas from "./CadNotas/CardNota";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Traalho", "Estudo").map((categoria, index) => {
                return (
                    <li key={index}>
                        
                        <CardNotas />
                    </li>
                );
            })}
            </ul>
        )
    }
}

export default ListaDeNotas;