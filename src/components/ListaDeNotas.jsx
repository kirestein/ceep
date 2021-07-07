import React, { Component } from "react";
import CardNotas from "./CardNota";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Traalho", "Estudo").map((categoria) => {
                return (
                    <li>
                        <div>{categoria}</div>
                        <CardNotas />
                    </li>
                );
            })}
            </ul>
        )
    }
}

export default ListaDeNotas;