import { Alert, FlatList, View, Text } from "react-native";
import { styles } from "./abareservations.style.js";
//import { appointments } from "../../constants/dados.js";
import Appointments from "../../components/appointment/appointment.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function AbaReservations() {
  const [appointments, setAppointments] = useState([]);

  async function LoadAppointments() {
    try {
      const response = await api.get("/appointments");

      if (response.data) {
        // Verifica se a resposta contém a lista de agendamentos
        setAppointments(response.data.appointments || response.data);
      }
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  async function DeleteAppointments(id_appointment) {
    try {
      const response = await api.delete("/appointments/" + id_appointment);

      if (response.data?.id_appointment) LoadAppointments();
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  useEffect(() => {
    LoadAppointments();
  }, []);

  return (
    <View style={styles.container}>
      {appointments.length === 0 ? (
        <Text>Nenhum agendamento encontrado</Text>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(appoint) => appoint.id_appointment.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Appointments
                id_appointment={item.id_appointment}
                service={item.service}
                mechanic={item.mechanic}
                specialty={item.specialty}
                bookingDate={item.booking_date}
                bookingHour={item.booking_hour}
                onPress={DeleteAppointments}
              />
            );
          }}
        />
      )}
    </View>
  );
}

export default AbaReservations;
