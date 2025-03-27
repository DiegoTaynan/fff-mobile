import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Registro(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  function handleNextStep() {
    if (!name || !email || !phone || !password1 || !password2) {
      Alert.alert("All fields are required.");
      return;
    }

    if (password1 !== password2) {
      Alert.alert("Passwords do not match.");
      return;
    }

    props.navigation.navigate("registro2", {
      name: name,
      email: email,
      phone: phone,
      password: password1,
    });
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets={true}
        >
          <Header texto="Create an account" />

          <View style={styles.formGroup}>
            <View style={styles.form}>
              <TextBox
                label="Full name"
                onChangeText={(texto) => setName(texto)}
                value={name}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="E-mail"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="Phone"
                onChangeText={(texto) => setPhone(texto)}
                value={phone}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="Chose a password"
                isPassword={true}
                onChangeText={(texto) => setPassword1(texto)}
                value={password1}
              />
            </View>

            <View style={styles.form}>
              <TextBox
                label="Confirm the password"
                isPassword={true}
                onChangeText={(texto) => setPassword2(texto)}
                value={password2}
              />
            </View>

            <View style={styles.form}>
              <Button
                text="Next step"
                theme="danger"
                onPress={handleNextStep}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Registro;
