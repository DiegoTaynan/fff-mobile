import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  services: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 5,
    marginTop: 10,
  },
  containerText: {
    flex: 1,
  },
  containerButton: {
    marginTop: 5,
    maxWidth: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  service: {
    fontSize: FONT_SIZE.xl,
    color: COLORS.red,
    fontWeight: "bold",
    marginTop: 5,
  },
  description: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginTop: 3,
  },
  icone: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
};
