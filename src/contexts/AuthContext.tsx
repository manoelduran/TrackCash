import React, { ReactNode, useState } from "react";
import * as api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  currentUser: User | null;
  fetchCurrentUser: (username: string, password: string) => Promise<void>;
  setCurrentUser: (user: User | null) => void;
  clearCurrentUser: () => void;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(JSON.parse(localStorage.getItem('currentUser')!) ?? []); 
  const fetchCurrentUser = async (username: string, password: string) => {
    const user = await api.login(username, password);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
  } 
  const clearCurrentUser = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  }
  return (
    <AuthContext.Provider value={{ fetchCurrentUser, currentUser, setCurrentUser, clearCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}