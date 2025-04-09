import { View, FlatList, Image, Text, Alert } from "react-native";
import { styles } from "./historys.style.js";
import icons from "../../constants/icons.js";
import History from "../../components/history/history.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function Historys() {
  const [history, setHistory] = useState([]);

  async function LoadHistory() {
    try {
      const response = await api.get("/history");

      if (
        response.data &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        const formattedData = response.data.map((item) => ({
          ...item,
          booking_date: validateDate(item.booking_date), // Valida a data
          icone: icons[item.icons] || icons.default, // Usa o campo 'icons' retornado pelo backend
        }));
        setHistory(formattedData);
      } else {
        setHistory([]); // Ensure state is updated with an empty array
        Alert.alert("No history data available.");
      }
    } catch (error) {
      console.error("Error loading history:", error); // Log do erro
      Alert.alert("An error occurred while fetching the data.");
    }
  }

  // Função para validar a data
  const validateDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : dateString;
  };

  useEffect(() => {
    LoadHistory();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        keyExtractor={(item, index) =>
          item.id_appointment
            ? item.id_appointment.toString()
            : index.toString()
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <History
            service={item.service}
            mechanic={item.mechanic}
            booking_date={item.booking_date}
            observations={item.observations}
            icone={item.icone}
          />
        )}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Image source={icons.empty} />
            <Text style={styles.emptyText}>No history found</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Historys;
