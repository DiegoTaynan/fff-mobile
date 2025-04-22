import { Alert, FlatList, View, Text } from "react-native";
import { styles } from "./abareservations.style.js";
import Appointments from "../../components/appointment/appointment.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function AbaReservations() {
  const [appointments, setAppointments] = useState([]);

  async function LoadAppointments() {
    try {
      const response = await api.get("/appointments");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error loading appointments:", error);
      Alert.alert("Error", "Failed to load appointments.");
    }
  }

  async function DeleteAppointments(id_appointment) {
    if (!id_appointment) {
      Alert.alert("Error", "Appointment ID is missing.");
      return;
    }

    try {
      const response = await api.delete("/appointments/" + id_appointment);

      if (response.status === 200) {
        Alert.alert("Success", "Appointment canceled successfully.");
        LoadAppointments();
      }
    } catch (error) {
      console.error("Frontend: Error deleting appointment:", error);
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  function ConfirmDelete(id_appointment) {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to cancel this appointment?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => DeleteAppointments(id_appointment) },
      ]
    );
  }

  useEffect(() => {
    LoadAppointments();
  }, []);

  return (
    <View style={styles.container}>
      {appointments.length === 0 ? (
        <Text>No appointments found</Text>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(appoint, index) =>
            appoint.id_appointment?.toString() || index.toString()
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Appointments
                id_appointment={item.id_appointment}
                service={item.service}
                mechanic={item.mechanic}
                specialty={item.specialty}
                bookingDate={item.date}
                bookingHour={item.hour}
                onPress={ConfirmDelete}
              />
            );
          }}
        />
      )}
    </View>
  );
}

export default AbaReservations;
