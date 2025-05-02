import { Alert, View, Text, ScrollView } from "react-native";
import { styles } from "./abaprofile.style.js";
import api from "../../constants/api.js";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/button/button.jsx";
import { AuthContext } from "../../contexts/auth.js";
import { useNavigation } from "@react-navigation/native";
import { RemoveUsuario } from "../../storage/storage.usuario.js";

function AbaProfile() {
  const navigation = useNavigation();
  const { user, setUser, loadingAuth } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  async function LoadProfile() {
    try {
      const response = await api.get("/users/profile");

      if (response.data?.name) {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setAddress(response.data.address);
        setComplement(response.data.complement);
        setCity(response.data.city);
        setState(response.data.state);
        setZipcode(response.data.zipcode);
      }
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  function Logout() {
    api.defaults.headers.common["Authorization"] = ""; // Remove o token do cabeçalho
    RemoveUsuario(); // Remove o usuário do AsyncStorage
    setUser(null); // Redefine o estado do usuário
    navigation.reset({
      index: 0,
      routes: [{ name: "main" }], // Redireciona para a tela 'main'
    });
  }

  useEffect(() => {
    console.log("User context:", user); // Log para verificar o estado do usuário
    if (user) {
      LoadProfile();
    }
  }, [user]);

  if (loadingAuth) {
    return <Text>Loading...</Text>; // Exibe um indicador de carregamento enquanto o estado de autenticação é carregado
  }

  return (
    <ScrollView style={styles.container}>
      {user ? (
        <>
          <View style={styles.item}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>{email}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Phone</Text>
            <Text style={styles.text}>{phone}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Address</Text>
            <Text style={styles.text}>{address}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Complement</Text>
            <Text style={styles.text}>{complement}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>City</Text>
            <Text style={styles.text}>{city}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>State</Text>
            <Text style={styles.text}>{state}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Zipcode</Text>
            <Text style={styles.text}>{zipcode}</Text>
          </View>
          <View style={styles.item}>
            <Button text="Disconnect" theme="danger" onPress={Logout} />
          </View>
        </>
      ) : (
        <View style={styles.item}>
          <Button text="Login" onPress={() => navigation.navigate("login")} />
        </View>
      )}
    </ScrollView>
  );
}

export default AbaProfile;
