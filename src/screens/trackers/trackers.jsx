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

      console.log("Frontend: API response for trackers:", response.data); // 🔥 Log para verificar os dados retornados

      if (response.data) {
        const formattedData = response.data.map((item, index) => ({
          ...item,
          id: item.id || `${item.service}_${index}`,
          icone: icons[formatIconKey(item.service)] || icons.default,
        }));
        setTracker(formattedData);
      }
    } catch (error) {
      console.error("Frontend: Error loading trackers:", error); // 🔥 Log do erro
      Alert.alert("An error has occurred. Please try again later.");
    }
  }

  const formatIconKey = (service) => {
    return service
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^\w_]/g, "");
  };

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
