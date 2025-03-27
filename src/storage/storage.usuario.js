import AsyncStorage from "@react-native-async-storage/async-storage";

async function SaveUsuario(user) {
  try {
    await AsyncStorage.setItem("usuario", JSON.stringify(user));
  } catch (error) {
    console.log("Erro ao salvar storage");
  }
}

async function LoadUsuario() {
  try {
    const storage = await AsyncStorage.getItem("usuario");

    return storage ? JSON.parse(storage) : {};
  } catch (error) {
    console.log("Erro ao carregar storage");
  }
}

export { SaveUsuario, LoadUsuario };
