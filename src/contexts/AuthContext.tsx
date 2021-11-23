import React, { ReactNode, useState } from "react";
import * as api from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  currentUser: User | null;
  fetchCurrentUser: (username: string, password: string) => Promise<void>;
  setCurrentUser: (user: User | null) => void;
  clearCurrentUser: () => void;
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  marketTotalizer: Channels;
  setMarketTotalizer: (marketTotalizer: Channels) => void;
  fetchMarketTotalizer: (username: string, password: string) => Promise<void>;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(JSON.parse(localStorage.getItem('currentUser')!) ?? []);
  const [marketTotalizer, setMarketTotalizer] = useState<Channels>(JSON.parse(localStorage.getItem('marketTotalizer')!) ?? [])
  const [isModalVisible, setIsModalVisible] = useState(false);
  const fetchCurrentUser = async (username: string, password: string) => {
    const user = await api.login(username, password);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
  }

  const fetchMarketTotalizer = async (username: string, password: string) => {
    const marketTotalizer = await api.getMarketTotalizers(username, password);
    localStorage.setItem('marketTotalizer', JSON.stringify(marketTotalizer));
    setMarketTotalizer(marketTotalizer)
  }
  const clearCurrentUser = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  }

  function handleOpenModal() {
    setIsModalVisible(true)
  }
  function handleCloseModal() {
    setIsModalVisible(false)
  }

  return (
    <AuthContext.Provider value={{
      isLoading,
      setIsLoading,
      setMarketTotalizer,
      password,
      setPassword,
      setUsername,
      username,
      marketTotalizer,
      fetchMarketTotalizer,
      handleCloseModal,
      handleOpenModal,
      isModalVisible,
      setIsModalVisible,
      fetchCurrentUser,
      currentUser,
      setCurrentUser,
      clearCurrentUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}