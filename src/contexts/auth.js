import { createContext, useState, useEffect } from "react";
import { LoadUsuario } from "../storage/storage.usuario.js";

const AuthContext = createContext({});

function AuthProvider(props) {
  const [user, setUser] = useState(null); // Permitir que o estado do usuário seja nulo
  const [loadingAuth, setLoadingAuth] = useState(true); // Adicionar estado de carregamento

  useEffect(() => {
    async function loadStoredUser() {
      const storedUser = await LoadUsuario();
      if (storedUser) {
        setUser(storedUser);
      }
      setLoadingAuth(false); // Finalizar o carregamento
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
