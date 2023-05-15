import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras.js";
import { useState } from "react";

export default function App() {
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
  const [selecionadas, setSelecionadas] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25,
  ]);

  const [letraSelecionada, setLselecionada] = useState("");
  const [numErros, setErros] = useState(0);
  const [imgForca, setImgForca] = useState("forca0");

  return (
    <div className="container">
      <Jogo
        palavras={palavras}
        selecionadas={selecionadas}
        setSelecionadas={setSelecionadas}
        letraSelecionada={letraSelecionada}
        setLselecionada={setLselecionada}
        numErros={numErros}
        setErros={setErros}
        imgForca={imgForca}
        setImgForca={setImgForca}
      />

      <Letras
        alfabeto={alfabeto}
        selecionadas={selecionadas}
        setSelecionadas={setSelecionadas}
        letraSelecionada={letraSelecionada}
        setLselecionada={setLselecionada}
        numErros={numErros}
        setErros={setErros}
      />
    </div>
  );
}
