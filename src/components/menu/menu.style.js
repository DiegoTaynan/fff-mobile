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
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.red, // Cor de fundo
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 150,
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
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
  },
};
