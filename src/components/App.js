import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras.js";

export default function App() {
  return (
    <div className="container">
      <Jogo palavras={palavras} />

      <Letras />
    </div>
  );
}
