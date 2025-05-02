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
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required.");
      return;
    }

    try {
      setLoading(true);
      const response = await api.post("/users/login", {
        email,
        password,
      });

      const token = response.data.token;
      if (token) {
        api.defaults.headers.common["Authorization"] = "Bearer " + token;
        const userData = { ...response.data, token };
        await SaveUsuario(userData);
        setUser(userData);

        props.navigation.reset({
          index: 0,
          routes: [{ name: "main" }],
        });
      } else {
        Alert.alert(
          "Login failed",
          "Token not found in the server response. Please contact support."
        );
      }
    } catch (error) {
      setLoading(false);
      if (error.response?.status === 401) {
        Alert.alert("Invalid email or password");
      } else if (error.response?.status === 500) {
        Alert.alert(
          "Server error",
          error.response.data.error || "Try again later"
        );
      } else {
        Alert.alert("An unexpected error occurred. Please try again.");
      }
    }
  }

  async function CarregarDados() {
    try {
      const usuario = await LoadUsuario();
      if (usuario?.token) {
        api.defaults.headers.common["Authorization"] =
          "Bearer " + usuario.token;
        const response = await api.get("/users/profile");
        if (response.data) {
          setUser(usuario);
          props.navigation.reset({
            index: 0,
            routes: [{ name: "main" }],
          });
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
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
