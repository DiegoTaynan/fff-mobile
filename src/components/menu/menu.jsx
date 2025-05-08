import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { styles } from "./menu.style";
import icons from "../../constants/icons"; // Importando os ícones
import { useNavigation } from "@react-navigation/native"; // Importando useNavigation
import { AuthContext } from "../../contexts/auth.js";

function Menu() {
  const navigation = useNavigation(); // Hook para navegação
  const { user } = useContext(AuthContext); // Verifica se o usuário está logado

  const navigateToServices = () => {
    navigation.navigate("services"); // Navega para a tela 'services'
  };

  const navigateToAppointments = () => {
    if (!user) {
      Alert.alert("Error", "You must be logged in to view appointments.");
      return;
    }
    navigation.navigate("Appointments"); // Navega para a tela 'Appointments'
  };

  const navigateToTrackers = () => {
    if (!user) {
      Alert.alert(
        "Error",
        "You must be logged in to view the service tracker."
      );
      return;
    }
    navigation.navigate("Service Tracker"); // Navega para a tela 'Service Tracker'
  };

  const navigateToHistory = () => {
    if (!user) {
      Alert.alert("Error", "You must be logged in to view the history.");
      return;
    }
    navigation.navigate("History"); // Navega para a tela 'History'
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false} // Oculta o indicador de rolagem vertical
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={navigateToServices}>
            <View style={styles.iconTextContainer}>
              <Image source={icons.icon_services} style={styles.icon} />
              {/* Ícone de Serviços */}
              <Text style={styles.buttonText}>SERVICES</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToAppointments} // Alterado para navegar para "Appointments"
          >
            <View style={styles.iconTextContainer}>
              <Image source={icons.icon_appointment} style={styles.icon} />
              {/* Ícone de Agendamentos */}
              <Text style={styles.buttonText}>APPOINTMENTS</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={navigateToTrackers}>
            <View style={styles.iconTextContainer}>
              <Image source={icons.icon_servicetracker} style={styles.icon} />
              {/* Ícone de Rastreador de Serviço */}
              <Text style={styles.buttonText}>SERVICE TRACKER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navigateToHistory}>
            <View style={styles.iconTextContainer}>
              <Image source={icons.icon_history} style={styles.icon} />
              {/* Ícone de Histórico */}
              <Text style={styles.buttonText}>HISTORY</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Menu;
