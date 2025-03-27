import { Image, View, Text, TouchableOpacity } from "react-native";
import icons from "../../constants/icons"; // Importa o objeto com todos os ícones
import { styles } from "./service.style.js";
import Button from "../button/button.jsx";

function Service(props) {
  // Mapeia dinamicamente o ícone com base no nome vindo dos props
  const iconSource = icons[props.icons]; // Busca o ícone usando o nome da chave

  return (
    <View style={styles.services}>
      <View style={styles.containerText}>
        <Text style={styles.service}>{props.service}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>

      <View style={styles.containerButton}>
        {/* Verifica se o ícone existe antes de renderizá-lo */}
        {iconSource && <Image source={iconSource} style={styles.icone} />}
        <Button
          text="Schedule"
          theme="danger"
          onPress={() => props.onPress(props.id_service)}
        />
      </View>
    </View>
  );
}

export default Service;
