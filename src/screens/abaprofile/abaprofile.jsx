import {
  Alert,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { styles } from "./abaprofile.style.js";
import api from "../../constants/api.js";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/button/button.jsx";
import { AuthContext } from "../../contexts/auth.js";
import { useNavigation } from "@react-navigation/native";
import { RemoveUsuario } from "../../storage/storage.usuario.js";
import { COLORS } from "../../constants/theme.js";
import { FontAwesome } from "@expo/vector-icons"; // Certifique-se que este pacote está instalado

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
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function LoadProfile() {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }

  function Logout() {
    api.defaults.headers.common["Authorization"] = "";
    RemoveUsuario().then(() => {
      setUser(null);
      navigation.reset({
        index: 0,
        routes: [{ name: "main" }],
      });
    });
  }

  function confirmDeleteAccount() {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: deleteAccount,
          style: "destructive",
        },
      ]
    );
  }

  async function deleteAccount() {
    try {
      setIsDeleting(true);
      const response = await api.delete("/users/profile");

      if (response.status === 200) {
        Alert.alert(
          "Account Deleted",
          "Your account has been successfully deleted.",
          [
            {
              text: "OK",
              onPress: () => {
                api.defaults.headers.common["Authorization"] = "";
                RemoveUsuario().then(() => {
                  setUser(null);
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "main" }],
                  });
                });
              },
            },
          ]
        );
      }
    } catch (error) {
      setIsDeleting(false);
      if (error.response?.data.error) {
        Alert.alert("Error", error.response.data.error);
      } else {
        Alert.alert(
          "Error",
          "Failed to delete account. Please try again later."
        );
      }
    }
  }

  useEffect(() => {
    if (user) {
      LoadProfile();
    }
  }, [user]);

  if (loadingAuth) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={COLORS.red} />
      </View>
    );
  }

  // Get first letter of name for profile initial
  const getInitial = () => {
    if (name && name.length > 0) {
      return name.charAt(0).toUpperCase();
    }
    return "U"; // Default if no name
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {user ? (
        <>
          <View style={styles.profileHeader}>
            <View style={styles.profileInitial}>
              <Text style={styles.initialText}>{getInitial()}</Text>
            </View>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileEmail}>{email}</Text>
          </View>

          {isLoading ? (
            <ActivityIndicator
              style={{ marginTop: 20 }}
              size="large"
              color={COLORS.red}
            />
          ) : (
            <>
              <Text style={styles.sectionTitle}>Personal Information</Text>
              <View style={styles.item}>
                <Text style={styles.title}>Phone</Text>
                <Text style={styles.text}>{phone}</Text>
              </View>

              <Text style={styles.sectionTitle}>Address Information</Text>
              <View style={styles.item}>
                <Text style={styles.title}>Address</Text>
                <Text style={styles.text}>{address}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.title}>Complement</Text>
                <Text style={styles.text}>{complement || "Not provided"}</Text>
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

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    styles.disconnectButton,
                    styles.buttonSpacing,
                  ]}
                  onPress={Logout}
                >
                  <View style={styles.buttonInner}>
                    <FontAwesome
                      name="sign-out"
                      size={20}
                      color={COLORS.red}
                      style={styles.buttonIcon}
                    />
                    <Text style={styles.disconnectText}>Logout</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={confirmDeleteAccount}
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <ActivityIndicator color={COLORS.red} />
                  ) : (
                    <View style={styles.buttonInner}>
                      <FontAwesome
                        name="trash-o"
                        size={20}
                        color={COLORS.white}
                        style={styles.buttonIcon}
                      />
                      <Text style={styles.deleteText}>Delete Account</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      ) : (
        <View style={styles.loginContainer}>
          <Text style={styles.loginMessage}>
            Please log in to view and manage your profile information. Creating
            an account allows you to make appointments and track your service
            history.
          </Text>
          <Button
            text="Login"
            style={styles.loginButton}
            onPress={() => navigation.navigate("login")}
          />
        </View>
      )}
    </ScrollView>
  );
}

export default AbaProfile;
