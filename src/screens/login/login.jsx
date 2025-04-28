import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useContext, useEffect, useState } from "react";
import api from "../../constants/api.js";
import { SaveUsuario, LoadUsuario } from "../../storage/storage.usuario.js";
import { AuthContext } from "../../contexts/auth.js";

console.log("API está disponível login:", api);

function Login(props) {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function ProcessarLogin() {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Validation Error", "Please fill in both email and password.");
      return;
    }

    try {
      setLoading(true);
      const response = await api.post("/users/login", {
        email,
        password,
      });

      const token = response.data.token; // Use o token retornado pela API
      if (token) {
        api.defaults.headers.common["Authorization"] = "Bearer " + token;
        setUser({ ...response.data, token });

        // Salvar dados do usuário no storage local
        await SaveUsuario({ ...response.data, token });
      } else {
        Alert.alert(
          "Login failed",
          "Token not found in the server response. Please contact support."
        );
      }
    } catch (error) {
      await SaveUsuario({});
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("An error has occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function CarregarDados() {
    try {
      const usuario = await LoadUsuario();
      if (usuario.token) {
        api.defaults.headers.common["Authorization"] =
          "Bearer " + usuario.token;
        setUser(usuario);
      } else {
        setUser(null); // Certifique-se de limpar o estado se o token não for válido
      }
    } catch (error) {
      setUser(null); // Certifique-se de limpar o estado em caso de erro
    }
  }

  useEffect(() => {
    CarregarDados();
  }, []);

  return (
    <View style={styles.container}>
      <Header texto="Access your account" />
      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox
            label="E-mail"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
            autoCapitalize="none" // Garantido que a primeira letra não será maiúscula
          />
        </View>
        <View style={styles.form}>
          <TextBox
            label="Password"
            isPassword={true}
            onChangeText={(texto) => setPassword(texto)}
            value={password}
          />
        </View>
        <View style={styles.form}>
          <Button
            text="Access"
            theme="danger"
            onPress={ProcessarLogin}
            isLoading={loading}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
          <Text style={styles.footerText}>Create my account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
