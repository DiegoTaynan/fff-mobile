import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  input: {
    width: "100%",
    backgroundColor: COLORS.white2,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.gray4,
  },
  label: {
    marginLeft: 5,
    color: COLORS.gray1,
    fontSize: FONT_SIZE.md,
  },
};
