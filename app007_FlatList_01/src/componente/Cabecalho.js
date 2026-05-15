import React from "react";
import { View, Text } from "react-native";
import { estilos } from "../stylesheet/estilos";

function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.textoCabecalho}>
        DESAFIO 02 - FLATLIST
      </Text>
    </View>
  );
}

export default Cabecalho;