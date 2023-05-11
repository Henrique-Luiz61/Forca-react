export default function Letras() {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function habilitarBotao() {
    alert("Habilitou o botão");
  }

  return (
    <div className="container-teclado">
      <div className="div-teclado">
        {alfabeto.map((letra) => (
          <button
            key={letra}
            className="botao-letra"
            onClick={habilitarBotao}
            disabled
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  );
}
