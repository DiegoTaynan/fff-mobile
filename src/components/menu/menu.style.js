import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // Distribui os botões com espaçamento proporcional
    marginBottom: 20,
    width: "100%", // Garante que os botões ocupem toda a largura disponível
  },
  button: {
    backgroundColor: COLORS.red, // Cor de fundo
    paddingVertical: 12,
    marginHorizontal: 5, // Espaçamento horizontal entre os botões
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // Faz com que os botões ocupem o mesmo espaço proporcional
    maxWidth: 150, // Define uma largura máxima para os botões
    aspectRatio: 1, // Garante que o botão seja quadrado
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 6, // Raio da sombra
    elevation: 5, // Para dispositivos Android, controla a sombra
  },
  iconTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 45, // Ajuste o tamanho do ícone
    height: 45, // Ajuste o tamanho do ícone
    marginBottom: 10, // Espaçamento entre o ícone e o texto
  },
  buttonText: {
    fontSize: 14, // Reduzido para melhor adaptação em telas menores
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center", // Centraliza o texto
  },
};
