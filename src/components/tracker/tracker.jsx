import { View, Image, Text } from "react-native";
import { styles } from "./tracker.style.js";

function Tracker(props) {
  // Função para formatar a data
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const statusText =
    props.status === "C"
      ? "Completed"
      : props.status === "P"
      ? "In Progress"
      : "Unknown";

  return (
    <View style={styles.tracker}>
      <Image source={props.icone} style={styles.icone} />
      <View style={styles.textos}>
        <Text style={styles.service}>{props.service}</Text>
        <View style={styles.container}>
          <Text style={styles.status}>{statusText}</Text>
          <Text style={styles.date}>{formatDateTime(props.dt_start)}</Text>
        </View>
      </View>
    </View>
  );
}

export default Tracker;
