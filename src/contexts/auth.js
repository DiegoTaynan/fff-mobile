import { createContext, useState, useEffect } from "react";
import { LoadUsuario } from "../storage/storage.usuario.js";

const AuthContext = createContext({});

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    async function loadStoredUser() {
      const storedUser = await LoadUsuario();
      if (storedUser) {
        setUser(storedUser);
      } else {
        setUser(null);
      }
      setLoadingAuth(false);
    }

    loadStoredUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loadingAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
