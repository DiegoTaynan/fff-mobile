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
      const response = await api.get("/appointments");

      if (response.data && response.data.length > 0) {
        const formattedData = response.data.map((item) => {
          const iconKey = formatIconKey(item.service);
          const icon = icons[iconKey] || icons.default;
          `Service: ${item.service}, Icon Key: ${iconKey}, Icon: ${icon}`;
          return {
            ...item,
            icone: icon, // Mapeia o ícone ou usa padrão
          };
        });
        setHistory(formattedData);
      } else {
        Alert.alert("No history data available.");
      }
    } catch (error) {
      console.error("Error loading history:", error);
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
    LoadHistory();
  }, []); // Certifique-se de que este efeito execute apenas uma vez após o primeiro render

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id_appointment.toString()}
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
