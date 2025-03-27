import { View, ScrollView, Alert } from "react-native";
import { styles } from "./registro2.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useContext, useState } from "react";
import api from "../../constants/api.js";
import { SaveUsuario } from "../../storage/storage.usuario.js";
import { AuthContext } from "../../contexts/auth.js";

function Registro2(props) {
  const name = props.route.params.name;
  const email = props.route.params.email;
  const phone = props.route.params.phone;
  const password = props.route.params.password;

  const { setUser } = useContext(AuthContext);

  const [address, setAddres] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [loading, setLoading] = useState(false);

  async function ExecuteAccount() {
    if (!address || !city || !state || !zipcode) {
      Alert.alert("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const response = await api.post("/users/register", {
        name,
        email,
        phone,
        password,
        address,
        complement,
        city,
        state,
        zipcode,
      });

      if (response.data) {
        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        await SaveUsuario(response.data);

        setUser(response.data);
      }

      Alert.alert("Account created successfully");
    } catch (error) {
      setLoading(false);
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          <Header texto="Enter your address" />

          <View style={styles.formGroup}>
            <View style={styles.form}>
              <TextBox
                label="Street Addres"
                onChangeText={(texto) => setAddres(texto)}
                value={address}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="Apartment/Suite/Unit"
                onChangeText={(texto) => setComplement(texto)}
                value={complement}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="City"
                onChangeText={(texto) => setCity(texto)}
                value={city}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="State"
                onChangeText={(texto) => setState(texto)}
                value={state}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="ZIP Code"
                onChangeText={(texto) => setZipcode(texto)}
                value={zipcode}
              />
            </View>

            <View style={styles.form}>
              <Button
                text="Finish"
                theme="danger"
                onPress={ExecuteAccount}
                isLoading={loading}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Registro2;
