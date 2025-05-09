import { COLORS, FONT_SIZE } from "../../constants/theme.js";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 12,
    paddingBottom: 20,
  },
  profileHeader: {
    backgroundColor: COLORS.red,
    paddingVertical: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  profileInitial: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  initialText: {
    fontSize: 34,
    fontWeight: "bold",
    color: COLORS.red,
  },
  profileName: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: FONT_SIZE.md,
    color: COLORS.white,
    opacity: 0.9,
  },
  sectionTitle: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.gray2,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  item: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginBottom: 4,
    fontWeight: "500",
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    fontWeight: "500",
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    paddingBottom: 30,
  },
  buttonSpacing: {
    marginBottom: 12,
  },
  loginContainer: {
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  loginMessage: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray2,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  loginButton: {
    width: width * 0.7,
  },
  actionButton: {
    borderRadius: 10,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  disconnectButton: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.red,
  },
  disconnectText: {
    color: COLORS.red,
    fontWeight: "bold",
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#DC3545",
    borderWidth: 0,
    borderRadius: 10,
    paddingVertical: 14,
  },
  deleteText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonInner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  // Original styles maintained
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
