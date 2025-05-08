import { COLORS, FONT_SIZE } from "../../constants/theme.js"; // Removendo scaleFactor para evitar problemas de escala
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isSmallScreen = width <= 360; // Detecta se a tela é pequena

export const styles = {
  btn: {
    width: "100%",
    borderRadius: 6,
    padding: isSmallScreen ? 8 : 12, // Reduz o padding em telas pequenas
  },
  primary: {
    backgroundColor: COLORS.blue,
  },
  danger: {
    backgroundColor: COLORS.red,
  },
  text: {
    color: "#fff",
    fontSize: isSmallScreen ? 10 : FONT_SIZE.md, // Tamanho reduzido para telas pequenas
    textAlign: "center",
    display: "flex", // Garante o uso de flexbox
    justifyContent: "center", // Centraliza o texto verticalmente
    alignItems: "center", // Centraliza horizontalmente
    paddingVertical: 0, // Remove qualquer padding vertical
    flexWrap: "nowrap", // Impede a quebra de texto
  },
  loading: {
    opacity: 0.5,
  },
  loadingColor: "#ffffff",
};
