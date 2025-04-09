import { View, FlatList, Alert, Image, Text } from "react-native";
import { styles } from "./trackers.style.js";
import Tracker from "../../components/tracker/tracker.jsx";
import icons from "../../constants/icons.js";
import api from "../../constants/api.js";
import { useEffect, useState } from "react";

function Trackers() {
  const [tracker, setTracker] = useState([]);

  async function LoadTracker() {
    try {
      const response = await api.get("/tracker");

      if (response.data) {
        const formattedData = response.data.map((item, index) => ({
          ...item,
          id: item.id || `${item.service}_${index}`,
          icone: icons[item.icons] || icons.default, // Usa o campo 'icons' retornado pelo backend
          booking_hour: item.booking_hour || "N/A", // Certifique-se de que o campo booking_hour está presente
        }));
        setTracker(formattedData);
      }
    } catch (error) {
      console.error("Frontend: Error loading trackers:", error); // 🔥 Log do erro
      Alert.alert("An error has occurred. Please try again later.");
    }
  }

  useEffect(() => {
    LoadTracker();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tracker}
        keyExtractor={(tra, index) => tra.id?.toString() || index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Tracker
            service={item.service}
            status={item.status}
            dt_start={item.dt_start}
            booking_hour={item.booking_hour} // Certifique-se de passar o campo booking_hour
            icone={item.icone}
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
