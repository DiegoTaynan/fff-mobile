import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  tracker: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    alignItems: "flex-start", // Garante que o ícone e o texto fiquem alinhados ao topo
  },
  icone: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  textos: {
    flex: 1,
    paddingLeft: 8,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-start", // Alinha o texto ao topo
  },
  service: {
    fontSize: FONT_SIZE.md,
    color: COLORS.black,
    marginBottom: 4,
  },
  mechanic: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray2,
    marginBottom: 4,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center", // Alinha "Began" e "Finish" verticalmente
    flexWrap: "wrap", // Permite quebrar as linhas se necessário
  },
  date: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray2,
    marginRight: 8, // Adiciona espaçamento entre as duas datas
    marginBottom: 4, // Espaçamento entre as linhas de data
    flexShrink: 1, // Garante que o texto não ultrapasse o limite da tela
  },
  status: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.red,
    flexShrink: 1,
  },
  comments: {
    fontSize: FONT_SIZE.sm,
  },
  observations: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray2,
    marginTop: 4,
  },
};
