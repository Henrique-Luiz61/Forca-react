import forca0 from "./assets/forca0.png";

export default function App() {
  return (
    <div className="container">
      <div className="conteudo-forca">
        <div className="div-forca">
          <img className="imagem-forca" src={forca0} alt="forca inicial" />
        </div>

        <div className="div-botao">
          <button class="botao-palavra">Escolher palavra</button>
        </div>
      </div>

      <div className="container-teclado">
        <div className="div-teclado">
          <button className="botao-teclado">a</button>
        </div>
      </div>
    </div>
  );
}
