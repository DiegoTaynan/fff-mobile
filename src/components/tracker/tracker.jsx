import { View, Image, Text } from "react-native";
import { styles } from "./tracker.style.js";

function Tracker(props) {
  const formatDateTime = (dateString, timeString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return `${formattedDate} ${timeString || ""}`; // Combina a data e a hora
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
          <Text style={styles.date}>
            {formatDateTime(props.dt_start, props.booking_hour)}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Tracker;
