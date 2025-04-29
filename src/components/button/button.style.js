import { COLORS, FONT_SIZE, scaleFactor } from "../../constants/theme.js"; // Importando scaleFactor para consistência
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isSmallScreen = width <= 360; // Detecta se a tela é pequena

export const styles = {
  btn: {
    width: "100%",
    borderRadius: 6,
    padding: 12,
  },
  primary: {
    backgroundColor: COLORS.blue,
  },
  danger: {
    backgroundColor: COLORS.red,
  },
  text: {
    color: "#fff",
    fontSize: FONT_SIZE.md * scaleFactor, // Aplicado o scaleFactor para ajustar dinamicamente o tamanho da fonte
    textAlign: "center",
    display: "flex", // Garante o uso de flexbox
    justifyContent: "center", // Centraliza o texto verticalmente
    alignItems: "center", // Centraliza horizontalmente
    paddingVertical: 0, // Remove qualquer padding vertical
  },
  loading: {
    opacity: 0.5,
  },
  loadingColor: "#ffffff",
};
