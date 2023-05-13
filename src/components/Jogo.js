import { useState } from "react";
import forca0 from "../assets/forca0.png";

export default function Jogo(props) {
  function iniciarJogo() {
    const novasSelecionadas = [];
    props.setSelecionadas(novasSelecionadas);
  }

  return (
    <div className="conteudo-forca">
      <div className="div-forca">
        <img className="imagem-forca" src={forca0} alt="forca inicial" />
      </div>

      <div className="div-escolherPalavra">
        <button onClick={iniciarJogo} className="botao-palavra">
          Escolher palavra
        </button>

        <div className="div-palavra">
          <p className="palavra">aaaa</p>
        </div>
      </div>
    </div>
  );
}
