import { useState } from "react";

export default function Letras(props) {
  const [alfabeto, setAlfabeto] = useState(props.alfabeto);

  function escolherLetra(indice) {
    const novasSelecionadas = [...props.selecionadas];
    novasSelecionadas.push(indice);
    props.setSelecionadas(novasSelecionadas);
  }

  return (
    <div className="container-teclado">
      <div className="div-teclado">
        {alfabeto.map((letra, indice) => (
          <button
            key={letra}
            className={`botao-letra ${
              props.selecionadas.includes(indice)
                ? "desabilitado"
                : "habilitado"
            }`}
            onClick={() => escolherLetra(indice)}
            disabled={props.selecionadas.includes(indice) ? true : false}
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  );
}
