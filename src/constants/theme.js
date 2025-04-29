import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const scaleFactor = width / 360; // Ajustado para calcular proporcionalmente ao tamanho da tela, sem limitar a 1

const COLORS = {
  red: "#BD152C",
  blue: "#0D6EFD",
  white: "#ffffff",
  white2: "#F4F7FE",
  black: "#000000",

  gray1: "#323434",
  gray2: "#717f7f",
  gray3: "#a0a0a0",
  gray4: "#E4E4E4",
  gray5: "#f1f5f4",
  gray6: "#E5ECFC",
};

const FONT_SIZE = {
  xsm: 11,
  sm: Math.round(12 * scaleFactor), // Ajusta dinamicamente o tamanho pequeno
  md: Math.round(16 * scaleFactor), // Ajusta dinamicamente o tamanho médio
  lg: Math.round(20 * scaleFactor), // Ajusta dinamicamente o tamanho grande
  xl: 32,
  xxl: 64,
};

export { COLORS, FONT_SIZE };
