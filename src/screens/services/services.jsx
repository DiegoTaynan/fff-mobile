import { Alert, Image, View, Text, ScrollView } from "react-native";
import { styles } from "./services.style.js";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useEffect, useState } from "react";
import Service from "../../components/service/service.jsx";
import api from "../../constants/api.js";

function Services(props) {
  const [services, setServices] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(false);

  function ClickService(id_service, service) {
    // Navega para a tela 'schedule' com o id_service e o nome do serviço
    props.navigation.navigate("schedule", {
      id_service,
      service, // Adiciona o nome do serviço
    });
  }

  async function LoadServices() {
    try {
      setLoading(true);
      const response = await api.get("/services");

      if (response.data) {
        setServices(response.data); // Atualiza o estado com os dados recebidos
      }
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    LoadServices();
  }, []);

  // Filtrando serviços com base na busca
  const filteredServices = services.filter((service) =>
    service.service.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icons.logo} style={styles.logo} />
      </View>

      <View style={styles.busca}>
        <TextBox
          placeholder="Search"
          onChangeText={(texto) => setBusca(texto)}
          value={busca}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredServices.map((service, index) => (
          <View key={index}>
            <Service
              id_service={service.id_service}
              icons={service.icons}
              service={service.service}
              description={service.description}
              onPress={() => ClickService(service.id_service, service.service)}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Services;
