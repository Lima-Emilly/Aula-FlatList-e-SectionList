import React from "react";

import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";

import dadosAlunos from "./src/dados/alunos.json";

import { estilos } from "./src/styleSheet/estilos";

function App() {

  function mostrarDetalhes(aluno) {

    const mensagem =
      "CPF: " + aluno.cpf + "\n" +
      "Nascimento: " + aluno.nascimento + "\n" +
      "Ano: " + aluno.ano;

    // Verifica se está no navegador
    if (Platform.OS === "web") {

      alert(aluno.nome + "\n\n" + mensagem);

    } else {

      Alert.alert(aluno.nome, mensagem);

    }
  }

  function mostraItem({ item }) {

    return (

      <TouchableOpacity
        style={estilos.item}
        onPress={() => mostrarDetalhes(item)}
        activeOpacity={0.7}
      >

        <Text style={estilos.nome}>
          {item.nome}
        </Text>

      </TouchableOpacity>
    );
  }

  function mostraCabecalhoLista({ section }) {

    return (

      <View style={estilos.cabecalho}>

        <Text style={estilos.cabecalhoTexto}>
          {section.title}
        </Text>

      </View>
    );
  }

  function extrairId(item) {

    return item.id;
  }

  return (

    <View style={estilos.container}>

      <Text style={estilos.titulo}>
        Lista de Alunos por Curso
      </Text>

      <SectionList
        sections={dadosAlunos}
        keyExtractor={extrairId}
        renderItem={mostraItem}
        renderSectionHeader={mostraCabecalhoLista}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

export default App;