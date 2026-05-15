import React from "react";
import { View } from "react-native";

import Cabecalho from "./src/componente/Cabecalho";
import Conteudo from "./src/componente/Conteudo";
import Rodape from "./src/componente/Rodape";

import { estilos } from "./src/stylesheet/estilos";

function App() {

  return (
    <View style={estilos.container}>

      <Cabecalho />

      <Conteudo />

      <Rodape />

    </View>
  );
}

export default App;