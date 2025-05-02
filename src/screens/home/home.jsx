import {
  Image,
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { styles } from "./home.style";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useEffect, useState, useContext } from "react";
import { banners, menu } from "../../constants/dados.js";
import Banners from "../../components/banners/banners.jsx";
import Menu from "../../components/menu/menu.jsx";
import api from "../../constants/api.js";
import { AuthContext } from "../../contexts/auth.js";

function Home(props) {
  const [busca, setBusca] = useState("");
  const [banners, setBanner] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState("Guest");
  const { user } = useContext(AuthContext); // Verificar se o usuário está logado

  // Função para carregar os banners
  async function LoadBanner() {
    try {
      const response = await api.get("/banners");

      if (response.data) {
        setBanner(response.data);
      }
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  // Função para carregar o nome do usuário logado
  async function LoadUser() {
    if (!user) {
      setUsuarioLogado("Guest"); // Define como Guest se o usuário não estiver logado
      return;
    }

    try {
      const response = await api.get("/users/profile");

      if (response.data) {
        const fullName = response.data.name;
        const firstName = fullName.split(" ")[0]; // Extrai o primeiro nome
        setUsuarioLogado(firstName);
      }
    } catch (error) {
      console.error("Error loading user profile:", error);
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  // Função para realizar a busca
  function Search(termo) {
    props.navigation.navigate("busca", {
      busca: termo, // Passa o termo de busca para a tela 'busca'
    });
  }

  useEffect(() => {
    LoadBanner();
    LoadUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.headerBar}>
            <Image source={icons.logo} style={styles.logo} />
          </View>

          <View style={styles.busca}>
            <Text style={styles.saudar}>Hi, {usuarioLogado}</Text>
            <TextBox
              placeholder="Search"
              onChangeText={(texto) => setBusca(texto)}
              value={busca}
              returnKeyType="search"
              onSubmit={() => Search(busca)} // Passa a busca ao pressionar "search"
            />
          </View>

          <Banners dados={banners} />
          <Menu dados={menu} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Home;
