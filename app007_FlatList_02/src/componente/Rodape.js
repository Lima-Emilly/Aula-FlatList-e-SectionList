import React from "react";
import { View, Text } from "react-native";
import { estilos } from "../stylesheet/estilos";

function Rodape() {

  let autor = "Emilly Lima";
  let data = "15/05/2026";

  return (
    <View style={estilos.rodape}>
      <Text style={estilos.textoRodape}>
        {autor}
      </Text>

      <Text style={estilos.textoRodape}>
        {data}
      </Text>
    </View>
  );
}

export default Rodape;