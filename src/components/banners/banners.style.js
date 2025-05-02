import { COLORS, FONT_SIZE } from "../../constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  icone: {
    width: 220,
    height: 120,
    marginTop: 20,
    marginRight: 20,
    borderRadius: 6,
  },
  banners: {
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  descricao: {
    fontSize: FONT_SIZE.xsm,
    color: COLORS.gray2,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "80%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 50,
  },
  closeButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalScrollContent: {
    flexGrow: 1, // Garante que o conteúdo ocupe todo o espaço disponível
    justifyContent: "center",
    alignItems: "center",
  },
  zoomableContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
