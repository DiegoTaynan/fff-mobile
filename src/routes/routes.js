import { useContext, useEffect, useState } from "react";
import RoutesOpen from "./routesOpen";
import RoutesPrivate from "./routesPrivate";
import { ActivityIndicator, View } from "react-native";

import { AuthContext } from "../contexts/auth.js";
import { LoadUsuario } from "../storage/storage.usuario.js";

function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      try {
        const storedUser = await LoadUsuario();
        if (storedUser?.token) {
          api.defaults.headers.common["Authorization"] =
            "Bearer " + storedUser.token;
          setUser(storedUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Erro ao verificar usuário:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkUser();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return user ? <RoutesPrivate /> : <RoutesOpen />;
}

export default Routes;
