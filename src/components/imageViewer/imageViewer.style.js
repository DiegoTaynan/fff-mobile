import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)", // Fundo preto com opacidade
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "70%",
    resizeMode: "contain", // Garante que a imagem seja exibida corretamente
    backgroundColor: COLORS.white, // Adiciona um fundo branco para a imagem
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 20,
  },
  navText: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.white,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  closeText: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.white,
  },
  noImageText: {
    fontSize: FONT_SIZE.md,
    color: COLORS.white,
  },
};
