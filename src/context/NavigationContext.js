import React, { useState } from "react";

const Context = React.createContext();

export const Provider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [headerOptions, setHeaderOptions] = useState({});

  return (
    <Context.Provider
      value={{
        currentPage,
        setCurrentPage,
        isModalVisible,
        setIsModalVisible,
        modalType,
        setModalType,
        headerOptions,
        setHeaderOptions,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
