import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { estilos } from "../stylesheet/estilos";
import paises from "../dados/paises.json";

function Conteudo() {

  function recuperaId(item) {
    return item.id.toString();
  }

  function mostrarItem({ item }) {
    return (
      <View style={estilos.card}>
        <Text style={estilos.pais}>{item.pais}</Text>

        <Text style={estilos.capital}>
          Capital: {item.capital}
        </Text>
      </View>
    );
  }

  function mostrarSeparador() {
    return <View style={estilos.separador} />;
  }

  function mostrarCabecalho() {
    return (
      <View style={estilos.areaCabecalho}>
        <Image
          source={require("../assets/bandeiras.jpg")}
          style={estilos.imagem}
        />

        <Text style={estilos.cabecalhoLista}>
          Países
        </Text>
      </View>
    );
  }

  function mostrarRodape() {
    return (
      <View style={estilos.areaRodape}>
        <Image
          source={require("../assets/bandeiras.jpg")}
          style={estilos.imagem}
        />
      </View>
    );
  }

  return (
    <FlatList
      style={{ flex: 1 }}
      data={paises}
      keyExtractor={recuperaId}
      renderItem={mostrarItem}
      ItemSeparatorComponent={mostrarSeparador}
      ListHeaderComponent={mostrarCabecalho}
      ListFooterComponent={mostrarRodape}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default Conteudo;