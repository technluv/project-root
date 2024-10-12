import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = (component, props = {}, config = {}) => {
    setModals([...modals, { component, props, config }]);
  };

  const closeModal = () => {
    setModals(modals.slice(0, -1));
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
