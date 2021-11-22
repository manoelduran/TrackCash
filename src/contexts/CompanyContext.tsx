import React, { ReactNode, useState } from "react";


interface CompanyProviderProps {
  children: ReactNode;
}

interface ICompanyContext {
    companys: Channels[];
    setCompanys: (companys: Channels[]) => void;
    isModalVisible: boolean;
    setIsModalVisible: (isModalVisible: boolean) => void;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
}

export const CompanyContext = React.createContext<ICompanyContext>({} as ICompanyContext);

export function CompanyProvider({ children }: CompanyProviderProps) {
    const [companys, setCompanys] = useState<Channels[]>({} as Channels[]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    function handleOpenModal() {
      setIsModalVisible(true)
    }
    function handleCloseModal() {
      setIsModalVisible(false)
    }
  return (
    <CompanyContext.Provider value={{companys, setCompanys,  handleCloseModal, handleOpenModal, isModalVisible, setIsModalVisible }}>
      {children}
    </CompanyContext.Provider>
  )
}