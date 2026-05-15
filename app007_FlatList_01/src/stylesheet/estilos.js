import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    paddingTop: 40,
  },

  cabecalho: {
    backgroundColor: "#9fc2e0",
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  textoCabecalho: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },

  card: {
    backgroundColor: "#b7d0e8",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },

  pais: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  capital: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },

  separador: {
    height: 10,
  },

  cabecalhoLista: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    color: "#222",
  },

  areaCabecalho: {
    alignItems: "center",
    marginVertical: 20,
  },

  areaRodape: {
    alignItems: "center",
    marginVertical: 20,
  },

  imagem: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },

  rodape: {
    backgroundColor: "#9fc2e0",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textoRodape: {
    fontSize: 16,
    fontWeight: "bold",
  },

});