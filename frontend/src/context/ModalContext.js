import React, { createContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = (Component, props = {}, config = {}) => {
    setModals([...modals, { Component, props, config, id: Date.now() }]);
  };

  const closeModal = (id) => {
    setModals(modals.filter((modal) => modal.id !== id));
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
