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
  fetchCurrentUser: (username: string, password: string) => Promise<User | null>;
  setCurrentUser: (user: User | null) => void;
  clearCurrentUser: () => void;
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
  handleOpenModal: (currentChannel: string) => void;
  handleCloseModal: () => void;
  payments: Payments | null;
  setPayments: (payments: Payments) => void;
  fetchPayments: () => Promise<Payments | null>;
  marketTotalizer: Channels | null;
  setMarketTotalizer: (marketTotalizer: Channels) => void;
  fetchMarketTotalizer: () => Promise<Channels | null>;
  transferences: Transferences | null;
  setTransferences: (transferences: Transferences) => void;
  fetchTransferences: () => Promise<Transferences | null>
  channel: string | null;
  setChannel: (channel: string | null) => void;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [channel, setChannel] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(JSON.parse(localStorage.getItem('currentUser')!) ?? null);
  const [payments, setPayments] = useState<Payments | null>(JSON.parse(localStorage.getItem('payments')!) ?? null);
  const [marketTotalizer, setMarketTotalizer] = useState<Channels | null>(JSON.parse(localStorage.getItem('marketTotalizer')!) ?? null);
  const [transferences, setTransferences] = useState<Transferences | null>(JSON.parse(localStorage.getItem('transferences')!) ?? null);

  const fetchCurrentUser = async (username: string, password: string) => {
    const user = await api.login(username, password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
    };
    return user;
  };

  const fetchPayments = async () => {
    if (!currentUser) {
      return null;
    };
    const payments = await api.getPayments(currentUser.token);
    if (payments) {
      localStorage.setItem('payments', JSON.stringify(payments));
      setPayments(payments)
    };
    return payments;
  };

  const fetchMarketTotalizer = async () => {
    if (!currentUser) {
      return null;
    };
    const marketTotalizer = await api.getMarketTotalizers(currentUser.token);
    if (marketTotalizer) {
      localStorage.setItem('marketTotalizer', JSON.stringify(marketTotalizer));
      setMarketTotalizer(marketTotalizer)
    };
    return marketTotalizer;
  };

  const fetchTransferences = async () => {
    if (!currentUser) {
      return null;
    };
    const transferences = await api.getTransferences(currentUser.token, channel);
    if (transferences) {
      localStorage.setItem('transferences', JSON.stringify(transferences));
      setTransferences(transferences)
    };
    return transferences;
  };
  const clearCurrentUser = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  function handleOpenModal(currentChannel: string) {
    setIsModalVisible(true)
    setChannel(currentChannel)
  };

  function handleCloseModal() {
    setIsModalVisible(false)
  };

  return (
    <AuthContext.Provider value={{
      channel,
      setChannel,
      transferences,
      setTransferences,
      fetchTransferences,
      payments,
      setPayments,
      fetchPayments,
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