import { View, FlatList, Image, Text, Alert } from "react-native";
import { styles } from "./historys.style.js";
import icons from "../../constants/icons.js";
import History from "../../components/history/history.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function Historys() {
  const [history, setHistory] = useState([]);

  // Função para carregar dados e mapear ícones baseados no serviço
  async function LoadHistory() {
    try {
      const response = await api.get("/history");
      console.log("API Response:", response.data); // Log da resposta da API

      if (response.data && response.data.length > 0) {
        const formattedData = response.data.map((item) => {
          const iconKey = formatIconKey(item.service);
          const icon = icons[iconKey] || icons.default;

          // Validação do campo dt_start
          const isValidDate = !isNaN(new Date(item.dt_start).getTime());
          const bookingDate = isValidDate ? item.dt_start : "Invalid Date";

          return {
            ...item,
            booking_date: bookingDate, // Atualize para booking_date
            icone: icon,
          };
        });
        setHistory(formattedData);
      } else {
        console.log("No history data available."); // Log para dados vazios
        Alert.alert("No history data available.");
      }
    } catch (error) {
      console.error("Error loading history:", error); // Log do erro
      Alert.alert("An error occurred while fetching the data.");
    }
  }

  // Função para formatar a chave do ícone
  const formatIconKey = (service) => {
    return service
      .toLowerCase() // Tudo minúsculo
      .replace(/\s+/g, "_") // Substitui espaços por "_"
      .replace(/[^\w_]/g, ""); // Remove caracteres não alfanuméricos e preserva "_"
  };

  useEffect(() => {
    console.log("History state before loading:", history); // Log do estado inicial
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
        renderItem={({ item }) => {
          const isValidDate = !isNaN(new Date(item.booking_date).getTime());
          const formattedDate = isValidDate
            ? item.booking_date
            : "Invalid Date";

          return (
            <History
              service={item.service}
              mechanic={item.mechanic}
              booking_date={formattedDate}
              observations={item.observations}
              icone={item.icone}
            />
          );
        }}
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
