import { View, FlatList, Alert, Image, Text } from "react-native";
import { styles } from "./trackers.style.js";
import Tracker from "../../components/tracker/tracker.jsx";
import icons from "../../constants/icons.js";
import api from "../../constants/api.js";
import { useEffect, useState } from "react";

function Trackers() {
  const [tracker, setTracker] = useState([]);

  // Função para carregar dados e mapear ícones baseados no serviço
  async function LoadTracker() {
    try {
      const response = await api.get("/tracker");

      if (response.data) {
        // Mapeia os dados recebidos, ajustando para corresponder ao padrão de ícones
        const formattedData = response.data.map((item, index) => ({
          ...item,
          id: item.id || `${item.service}_${index}`, // Gera um ID único se necessário
          icone: icons[formatIconKey(item.service)] || icons.default, // Mapeia o ícone ou usa padrão
        }));
        setTracker(formattedData); // Atualiza o estado com os dados formatados
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("An error has occurred. Please try again later.");
      }
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
    LoadTracker();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tracker}
        keyExtractor={(tra, index) => tra.id?.toString() || index.toString()} // Garante uma chave única
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Tracker
            service={item.service}
            status={item.status}
            dt_start={item.dt_start}
            icone={item.icone} // Ícone correto baseado no serviço
          />
        )}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Image source={icons.empty} />
            <Text style={styles.emptyText}>No services found</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Trackers;
