import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login/login.jsx";
import Registro from "../screens/registro/registro.jsx";
import Registro2 from "../screens/registro2/registro2.jsx";

const Stack = createNativeStackNavigator();

function RoutesOpen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registro"
        component={Registro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registro2"
        component={Registro2}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RoutesOpen;
