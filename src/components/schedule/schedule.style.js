import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  theme: {
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue,
  },
  textHour: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.gray2,
    marginTop: 20,
  },
  textService: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.gray2,
    marginTop: 20,
  },
  selectedServiceText: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.black,
    marginLeft: 10,
    flexShrink: 1,
  },
  selectedServicesHeader: {
    marginTop: 20,
    marginBottom: 10,
  },
  selectedServicesHeaderText: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "bold",
    color: COLORS.gray2,
  },
  selectedServicesList: {
    maxHeight: 150, // Define a altura máxima para a lista
    marginTop: 10,
  },
  selectedServiceItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
};
