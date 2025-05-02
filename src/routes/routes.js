import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../screens/main/main.jsx";
import Services from "../screens/services/services.jsx";
import Schedule from "../components/schedule/schedule.jsx";
import AbaReservations from "../screens/abareservations/abareservations.jsx";
import Trackers from "../screens/trackers/trackers.jsx";
import History from "../screens/historys/historys.jsx";
import Busca from "../screens/busca/busca.jsx";
import AbaProfile from "../screens/abaprofile/abaprofile.jsx";
import Login from "../screens/login/login.jsx";
import Registro from "../screens/registro/registro.jsx";
import Registro2 from "../screens/registro2/registro2.jsx";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="services"
        component={Services}
        options={{ headerTitle: "Services", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="schedule"
        component={Schedule}
        options={{
          headerTitle: "Make a reservation",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Appointments"
        component={AbaReservations}
        options={{ headerTitle: "Appointments", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Service Tracker"
        component={Trackers}
        options={{ headerTitle: "Service Tracker", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerTitle: "History", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="busca"
        component={Busca}
        options={{ headerTitle: "Search result", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="abaprofile"
        component={AbaProfile}
        options={{ headerTitle: "Profile", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="registro"
        component={Registro}
        options={{ headerTitle: "Register", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="registro2"
        component={Registro2}
        options={{ headerTitle: "Register", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
