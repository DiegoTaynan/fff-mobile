import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main/main.jsx";
import Services from "../screens/services/services.jsx";
import Schedule from "../components/schedule/schedule.jsx";
import AbaReservations from "../screens/abareservations/abareservations.jsx"; // Importe a tela de agendamentos
import Trackers from "../screens/trackers/trackers.jsx";
import History from "../screens/historys/historys.jsx";
import Busca from "../screens/busca/busca.jsx";
import { COLORS } from "../constants/theme.js";

const Stack = createNativeStackNavigator();

function RoutesPrivate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="services"
        component={Services}
        options={{
          headerTitle: "Services",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.white,
          },
        }}
      />
      <Stack.Screen
        name="schedule"
        component={Schedule}
        options={{
          headerTitle: "Make a reservation",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Appointments" // Nome correto da tela de agendamentos
        component={AbaReservations} // Componente da tela de agendamentos
        options={{
          headerTitle: "Appointments",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.white,
          },
        }}
      />
      <Stack.Screen
        name="Service Tracker" // Nome correto da tela de agendamentos
        component={Trackers} // Componente da tela de agendamentos
        options={{
          headerTitle: "Service Tracker",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.white,
          },
        }}
      />
      <Stack.Screen
        name="History" // Nome correto da tela de agendamentos
        component={History} // Componente da tela de agendamentos
        options={{
          headerTitle: "History",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.white,
          },
        }}
      />
      <Stack.Screen
        name="busca"
        component={Busca}
        options={{
          headerTitle: "Search result",
          headerTitleAlign: "center",
          headerTintColor: COLORS.gray2,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RoutesPrivate;
