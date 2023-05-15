import { useState } from "react";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

let indiceSorteado = null;
let palavraSorteada = "";
let arrayPalavra = [];
let palavra = "";

export default function Jogo(props) {
  function iniciarJogo() {
    const novasSelecionadas = [];
    props.setSelecionadas(novasSelecionadas);

    indiceSorteado = Math.floor(Math.random() * props.palavras.length);
    palavraSorteada = props.palavras[indiceSorteado];
    arrayPalavra = palavraSorteada.split("");

    for (let i = 0; i < arrayPalavra.length; i++) {
      palavra += "-";
    }
  }

  return (
    <div className="conteudo-forca">
      <div className="div-forca">
        <img
          data-test="game-image"
          className="imagem-forca"
          src={forca0}
          alt="forca inicial"
        />
      </div>

      <div className="div-escolherPalavra">
        <button
          data-test="chose-word"
          onClick={iniciarJogo}
          className="botao-palavra"
        >
          Escolher palavra
        </button>

        <div className="div-palavra">
          <h1 data-test="word" className="palavras">
            {" "}
            {palavra}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
