import { Image, Text, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.js";
import icons from "../../constants/icons.js";

import Home from "../home/home.jsx";
import AbaReservations from "../abareservations/abareservations.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";

const Tab = createBottomTabNavigator();

function Main() {
  const { loadingAuth } = useContext(AuthContext);

  if (loadingAuth) {
    return <Text>Loading...</Text>; // Exibe um indicador de carregamento enquanto o estado de autenticação é carregado
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerShown: false,
          headerTitle: () => {
            return (
              <Image
                source={icons.logo}
                style={{ width: 70.375, height: 37.75 }}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false} // Oculta o indicador de rolagem vertical
              >
                <Image
                  source={icons.home}
                  style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
                />
              </ScrollView>
            );
          },
        }}
      />
      <Tab.Screen
        name="Reservations"
        component={AbaReservations}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image
                source={icons.logo}
                style={{ width: 70.375, height: 37.75 }}
              />
            );
          },
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icons.calendar}
                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AbaProfile}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image
                source={icons.logo}
                style={{ width: 70.375, height: 37.75 }}
              />
            );
          },
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icons.profile}
                style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
