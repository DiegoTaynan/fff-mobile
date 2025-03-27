import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.white,
  },
  headerBar: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: 70.375,
    height: 37.75,
  },
  busca: {
    marginTop: 20,
    marginBotton: 10,
  },
  saudar: {
    fontSize: FONT_SIZE.xl, // Tamanho da fonte
    color: COLORS.red, // Cor do texto
    fontWeight: "bold",
    marginBottom: 8, // Espaçamento entre o texto e o campo de busca
  },
};
