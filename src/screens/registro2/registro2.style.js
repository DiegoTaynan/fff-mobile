import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  scrollView: {
    width: "100%",
  },
  formGroup: {
    width: "100%",
    marginTop: 25,
    marginBottom: 40,
  },
  footer: {
    width: "100%",
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 0,
    padding: 20,
    height: 70,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.gray3,
    fontSize: FONT_SIZE.md,
  },
};
