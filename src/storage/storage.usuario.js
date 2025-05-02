import AsyncStorage from "@react-native-async-storage/async-storage";

export async function SaveUsuario(usuario) {
  try {
    await AsyncStorage.setItem("@usuario", JSON.stringify(usuario));
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
  }
}

export async function LoadUsuario() {
  try {
    const usuario = await AsyncStorage.getItem("@usuario");
    return usuario ? JSON.parse(usuario) : null;
  } catch (error) {
    console.error("Erro ao carregar usuário:", error);
    return null;
  }
}

export async function RemoveUsuario() {
  try {
    await AsyncStorage.removeItem("@usuario"); // Remove o item do armazenamento
  } catch (error) {
    console.error("Erro ao remover usuário:", error);
  }
}
