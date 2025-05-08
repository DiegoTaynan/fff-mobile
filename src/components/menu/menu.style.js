import { COLORS, FONT_SIZE } from "../../constants/theme";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const screenWidth = width;
const screenHeight = height;

// Calcular o tamanho do botão com base na largura da tela
// Garantindo tamanho mínimo e máximo adequados
const buttonSize = Math.max(120, Math.min(180, screenWidth * 0.42));
// Define um tamanho fixo para os ícones baseado no buttonSize para melhor consistência
const iconSize = Math.min(45, buttonSize * 0.4); // Tamanho fixo proporcional ao botão
const fontSize = Math.max(12, Math.min(16, screenWidth * 0.035)); // Fonte proporcional

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10, // Reduzir padding horizontal para dar mais espaço aos botões
    width: "100%", // Garantir que o container ocupe toda a largura disponível
  },
  row: {
    flexDirection: "row",
    justifyContent: "center", // Centraliza os botões na linha
    marginBottom: screenHeight * 0.025, // Margem proporcional à altura da tela
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.red,
    paddingVertical: buttonSize * 0.12,
    marginHorizontal: "3%", // Usa porcentagem para garantir espaçamento proporcional igual
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: buttonSize, // Tamanho dinâmico baseado na tela
    height: buttonSize, // Mantém o aspecto quadrado
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    // Garante que os botões tenham o mesmo tamanho
    flex: 0.5, // Os dois botões em uma linha dividem o espaço igualmente
    maxWidth: buttonSize,
  },
  iconTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: iconSize, // Tamanho fixo para todos os ícones
    height: iconSize, // Garantir que altura e largura sejam iguais
    marginBottom: buttonSize * 0.1, // Espaçamento proporcional
    resizeMode: "contain", // Mantém a proporção da imagem sem perda de qualidade
  },
  buttonText: {
    fontSize: fontSize, // Tamanho dinâmico baseado na tela
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
  },
};
