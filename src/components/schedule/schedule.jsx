import { Alert, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./schedule.style";
import { Calendar } from "react-native-calendars";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";
import api from "../../constants/api.js";
import { FontAwesome } from "@expo/vector-icons"; // Certifique-se de ter o pacote @expo/vector-icons instalado

function Schedule(props) {
  const { id_service, service } = props.route.params;

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [selectedHour, setSelectedHour] = useState("");
  const [availableHours, setAvailableHours] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([id_service]); // Use ID instead of name

  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 0; // Sunday (0 is Sunday)
  };

  const isWeekday = (date) => {
    const day = new Date(date).getDay();
    return day >= 1 && day <= 5; // Monday to Friday (1 is Monday, 5 is Friday)
  };

  const isSaturday = (date) => {
    const day = new Date(date).getDay();
    return day === 6; // Saturday (6 is Saturday)
  };

  // Function to generate time slots based on the day
  const generateAvailableHours = (date) => {
    const hours = [];
    let startHour, endHour;

    if (isWeekend(date)) {
      return hours; // No availability on Sunday
    } else if (isSaturday(date)) {
      startHour = 8; // Saturday: from 08:00 to 16:00
      endHour = 16;
    } else if (isWeekday(date)) {
      startHour = 8; // Weekdays: from 08:00 to 18:00
      endHour = 18;
    }

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${String(hour).padStart(2, "0")}:${String(
          minute
        ).padStart(2, "0")}`;
        hours.push(time);
      }
    }
    return hours;
  };

  useEffect(() => {
    setAvailableHours(generateAvailableHours(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    // Fetch available services from the API
    async function fetchServices() {
      try {
        const response = await api.get("/services");
        setServices(response.data);
      } catch (error) {
        Alert.alert("Failed to load services. Please try again later.");
      }
    }

    fetchServices();
  }, []);

  // Filtrar serviços para remover os serviços já selecionados
  const filteredServices = services.filter(
    (s) => !selectedServices.includes(s.id_service) // Use ID instead of name
  );

  async function ClickBooking() {
    try {
      const response = await api.post("/appointments", {
        id_service: id_service,
        services: selectedServices,
        booking_date: selectedDate,
        booking_hour: selectedHour,
      });

      if (response.data?.id_appointment) props.navigation.popToTop();
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  // Função para remover um serviço selecionado
  const removeService = (serviceToRemove) => {
    setSelectedServices(
      selectedServices.filter((service) => service !== serviceToRemove)
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Calendar
          theme={styles.theme}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: { selected: true },
          }}
          minDate={new Date().toDateString()}
        />

        <View>
          <Text style={styles.textHour}>Hour</Text>
        </View>

        <View>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue) => {
              setSelectedHour(itemValue);
            }}
          >
            {availableHours.map((hour, index) => (
              <Picker.Item key={index} label={hour} value={hour} />
            ))}
          </Picker>
        </View>
      </View>

      <View>
        <Text style={styles.textService}>Additional Services</Text>
      </View>

      <View>
        <Picker
          selectedValue=""
          onValueChange={(itemValue) => {
            if (itemValue) {
              setSelectedServices([...selectedServices, itemValue]);
            }
          }}
        >
          <Picker.Item label="Select a service" value="" />
          {filteredServices.map((service, index) => (
            <Picker.Item
              key={index}
              label={service.service}
              value={service.id_service} // Use ID instead of name
            />
          ))}
        </Picker>
      </View>

      <View style={styles.selectedServicesHeader}>
        <Text style={styles.selectedServicesHeaderText}>Selected Services</Text>
      </View>

      <ScrollView
        style={styles.selectedServicesList}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        {selectedServices.map((service, index) => (
          <View key={index} style={styles.selectedServiceItem}>
            <Text style={styles.selectedServiceText}>
              {services.find((s) => s.id_service === service)?.service}
            </Text>
            {index > 0 && ( // Mostrar botão de remoção apenas para serviços adicionais
              <TouchableOpacity onPress={() => removeService(service)}>
                <FontAwesome name="times-circle" size={24} color="red" />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      <View>
        <Button text="Confirm reservation" onPress={ClickBooking} />
      </View>
    </View>
  );
}

export default Schedule;
