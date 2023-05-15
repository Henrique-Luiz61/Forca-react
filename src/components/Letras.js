import { useState } from "react";

export default function Letras(props) {
  const [alfabeto, setAlfabeto] = useState(props.alfabeto);

  function escolherLetra(indice, letra) {
    const novasSelecionadas = [...props.selecionadas];
    novasSelecionadas.push(indice);
    props.setSelecionadas(novasSelecionadas);
    let ultimaLetraSelecionada = letra;
    props.setLselecionada(ultimaLetraSelecionada);
  }

  return (
    <div className="container-teclado">
      <div className="div-teclado">
        {alfabeto.map((letra, indice) => (
          <button
            data-test="letter"
            key={letra}
            className={`botao-letra ${
              props.selecionadas.includes(indice)
                ? "desabilitado"
                : "habilitado"
            }`}
            onClick={() => escolherLetra(indice, letra)}
            disabled={props.selecionadas.includes(indice) ? true : false}
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  );
}
