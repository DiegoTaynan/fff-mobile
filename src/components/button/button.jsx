import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        props.theme == "danger" ? styles.danger : styles.primary,
        props.isLoading ? styles.loading : "",
        props.style, // Permite passagem de estilo personalizado
      ]}
      disabled={props.isLoading}
      onPress={props.onPress}
    >
      {props.isLoading ? (
        <ActivityIndicator color={styles.loadingColor} />
      ) : (
        <Text style={styles.text} numberOfLines={1}>
          {props.text}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
