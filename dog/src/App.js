import "./styles.css";
import { useState } from "react";


import CardAnimal from "./componentes/CardAnimal/CardAnimal";
import CardInformacoes from "./componentes/CardInformacoes/CardInformacoes";
import Topo from './componentes/Topo/Topo';

export default function App() {
 

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

 
  return (
    <div className="App">      
      <Topo clickAlterarAnimal={alterarState} />
      <CardAnimal tipoAnimal={tipoDoComponenteCard} />
      <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
    </div>
  );
}
