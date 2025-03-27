import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useContext, useEffect, useState } from "react";
import api from "../../constants/api.js";
import { SaveUsuario, LoadUsuario } from "../../storage/storage.usuario.js";
import { AuthContext } from "../../contexts/auth.js";

function Login(props) {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function ProcessarLogin() {
    try {
      setLoading(true);
      const response = await api.post("/users/login", {
        email,
        password,
      });

      if (response.data) {
        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        setUser(response.data);
      }

      //Salvar dados do usuario no storage local
      SaveUsuario(response.data);
    } catch (error) {
      setLoading(false);
      await SaveUsuario({});
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  async function CarregarDados() {
    try {
      const usuario = await LoadUsuario();
      if (usuario.token)
        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
      setUser(usuario);
    } catch (error) {}
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
