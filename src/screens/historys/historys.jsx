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
        const formattedData = await Promise.all(
          response.data.map(async (item) => {
            const imagesResponse = await api.get(
              `/appointments/${item.id_appointment}/images`
            );
            const images = imagesResponse.data || [];
            return {
              ...item,
              booking_date: validateDate(item.dt_start), // Atualizado para usar dt_start
              icone: icons[item.icons] || icons.default, // Usa o campo 'icons' retornado pelo backend
              images: images.map((img) => img.image_url), // Inclui as URLs das imagens
            };
          })
        );
        setHistory(formattedData);
      } else {
        setHistory([]); // Atualiza o estado com um array vazio
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
          item.id_history ? item.id_history.toString() : index.toString()
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <History
            service={item.service}
            mechanic={item.mechanic || "N/A"} // Adiciona fallback para mechanic
            booking_date={item.booking_date}
            observations={item.observations}
            icone={item.icone}
            id_appointment={item.id_appointment} // Passa o id_appointment para o componente History
            images={item.images || []} // Passa as URLs das imagens diretamente
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
