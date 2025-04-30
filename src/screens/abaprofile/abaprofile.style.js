import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 12,
  },
  item: {
    borderWidth: 1,
    borderColor: COLORS.gray4,
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
    //marginVertical: 10,
  },
  title: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginBottom: 4,
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
  },
  buttonDanger: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonDangerText: {
    color: "white",
    fontWeight: "bold",
  },
};
