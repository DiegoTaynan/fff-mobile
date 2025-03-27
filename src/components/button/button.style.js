import { COLORS, FONT_SIZE } from "../../constants/theme.js";

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
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  },
  loading: {
    opacity: 0.5,
  },
  loadingColor: "#ffffff",
};
