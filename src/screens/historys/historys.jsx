import { View, FlatList, Image, Text, Alert } from "react-native";
import { styles } from "./historys.style.js";
import icons from "../../constants/icons.js";
import History from "../../components/history/history.jsx";
import { useEffect, useState, useContext } from "react";
import api from "../../constants/api.js";
import { AuthContext } from "../../contexts/auth.js";

function Historys() {
  const [history, setHistory] = useState([]);
  const { user } = useContext(AuthContext); // Obter o usuário logado

  async function LoadHistory() {
    if (!user) {
      Alert.alert("Error", "You must be logged in to view history.");
      return;
    }

    try {
      const response = await api.get(`/history?user_id=${user.id}`); // Filtra pelo ID do usuário logado

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
              booking_date: validateDate(item.dt_start),
              icone: icons[item.icons] || icons.default,
              images: images.map((img) => img.image_url),
            };
          })
        );
        setHistory(formattedData);
      } else {
        setHistory([]);
        Alert.alert("No history data available.");
      }
    } catch (error) {
      console.error("Error loading history:", error);
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
  }, [user]);

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
