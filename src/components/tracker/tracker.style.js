import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  tracker: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 16, // Garante que o conteúdo não grude nas bordas da tela
    borderWidth: 1,
    borderColor: COLORS.gray4,
  },
  icone: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  textos: {
    flex: 1, // Expande para ocupar o espaço disponível
    paddingLeft: 8, // Adiciona espaçamento entre o ícone e os textos
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between", // Garante que os textos fiquem nas extremidades
    alignItems: "center", // Centraliza verticalmente os itens
    width: "100%", // Usa 100% da largura disponível do contêiner pai
    paddingHorizontal: 8, // Adiciona espaçamento interno para evitar colisão com bordas
  },
  service: {
    fontSize: FONT_SIZE.md,
    color: COLORS.black,
    marginBottom: 4, // Espaçamento entre "Service" e os outros textos
  },
  date: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray2,
    textAlign: "right", // Garante alinhamento correto
    flexShrink: 1, // Evita que o texto ultrapasse os limites
  },
  status: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.red,
    flexShrink: 1, // Impede que o texto ultrapasse os limites
  },
};
