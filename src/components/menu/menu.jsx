import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./menu.style";
import icons from "../../constants/icons"; // Importando os ícones
import { useNavigation } from "@react-navigation/native"; // Importando useNavigation

function Menu() {
  const navigation = useNavigation(); // Hook para navegação

  const navigateToServices = () => {
    navigation.navigate("services"); // Navega para a tela 'services'
  };

  const navigateToAppointments = () => {
    navigation.navigate("Appointments"); // Navega para a tela 'Appointments'
  };

  const navigateToTrackers = () => {
    navigation.navigate("Service Tracker"); // Navega para a tela 'Appointments'
  };

  const navigateToHistory = () => {
    navigation.navigate("History"); // Navega para a tela 'Appointments'
  };

  return (
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
  );
}

export default Menu;
