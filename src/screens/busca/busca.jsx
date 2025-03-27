import { FlatList, Image, Text, View, Alert } from "react-native";
import { styles } from "./busca.style.js";
import { services } from "../../constants/dados.js";
import icons from "../../constants/icons.js";
import Service from "../../components/service/service.jsx";
import api from "../../constants/api.js";
import { useState, useEffect } from "react";

function Busca(props) {
  const busca = props.route.params?.busca; // Parâmetro de busca recebido

  const [services, setServices] = useState([]);

  // Função de navegação para a tela de 'schedule'
  function ClickService(id_service, service) {
    // Navega para a tela 'schedule' com o id_service e o nome do serviço
    props.navigation.navigate("schedule", {
      id_service,
      service, // Adiciona o nome do serviço
    });
  }

  async function LoadSearch() {
    try {
      const response = await api.get("/services", {
        params: { busca }, // Envia o termo de busca como parâmetro
      });

      if (response.data) {
        setServices(response.data); // Atualiza o estado com os dados recebidos
      }
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("An error has occurred. Please try again later.");
    }
  }

  useEffect(() => {
    if (busca) {
      LoadSearch();
    }
  }, [busca]); // Recarrega quando o termo de busca mudar

  // Filtrando serviços com base na busca
  const filteredServices = services.filter((service) =>
    service.service.toLowerCase().includes(busca?.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredServices} // Use os serviços filtrados
        keyExtractor={(service) => service.id_service} // Consistência no uso do ID
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Service
              id_service={item.id_service}
              icone={item.icone}
              service={item.service}
              description={item.description}
              onPress={() => ClickService(item.id_service, item.service)} // Chama a função ClickService
            />
          );
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={icons.empty} />
              <Text style={styles.emptyText}>No services found</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Busca;
