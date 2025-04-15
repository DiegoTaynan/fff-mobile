import { View, Image, Text } from "react-native";
import { styles } from "./history.style.js";
import Button from "../button/button.jsx";

function History(props) {
  const formatDate = (dateString) => {
    if (dateString === "Invalid Date") {
      return dateString; // Retorna "Invalid Date" diretamente
    }
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <View style={styles.tracker}>
      <Image source={props.icone} style={styles.icone} />
      <View style={styles.textos}>
        <Text style={styles.service}>{props.service}</Text>
        <View style={styles.row}>
          <Text style={styles.mechanic}>Mechanic: {props.mechanic}</Text>
          <View style={styles.containerButton}>
            <Button
              text="Attach"
              theme="danger"
              onPress={() => console.log("Attach pressed")}
            />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.date}>
            Date: {formatDate(props.booking_date)}
          </Text>
        </View>
        <View>
          <Text style={styles.comments}>Observations:</Text>
          <Text style={styles.comments}>{props.observations}</Text>
        </View>
      </View>
    </View>
  );
}

export default History;
