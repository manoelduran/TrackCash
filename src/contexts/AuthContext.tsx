import React, { ReactNode, useState } from "react";
import * as api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  currentUser: User | null;
  fetchCurrentUser: (username: string, password: string) => Promise<void>; // a função busca um usuario, formato sting
  setCurrentUser: (user: User | null) => void;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null); // o estado pode ser usuario ou nulo, iniciando como nulo
  const fetchCurrentUser = async (username: string, password: string) => {
    const user = await api.login(username, password);
    setCurrentUser(user);
  } // a função asyncrona fetch busca um usuario na api com parametro username, e seta o usuario  

  return (
    <AuthContext.Provider value={{ fetchCurrentUser, currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}