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

      if (response.data && response.data.length > 0) {
        const formattedData = response.data.map((item) => {
          const iconKey = formatIconKey(item.service);
          const icon = icons[iconKey] || icons.default;

          return {
            ...item,
            booking_date: item.dt_start || "Invalid Date",
            icone: icon,
          };
        });
        setHistory(formattedData);
      } else {
        Alert.alert("Nenhum dado de histórico disponível.");
      }
    } catch (error) {
      console.error("Erro ao carregar o histórico:", error); // Log do erro
      Alert.alert("Ocorreu um erro ao buscar os dados do histórico.");
    }
  }

  // Função para formatar a chave do ícone
  const formatIconKey = (service) => {
    return service
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^\w_]/g, "");
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
            <Text style={styles.emptyText}>Nenhum histórico encontrado</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Historys;
