import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ModalContext } from '../ModalContext';
import SampleModal from './modals/SampleModal';
import ConfirmationModal from './modals/ConfirmationModal';
import FormModal from './modals/FormModal';

const MainComponent = () => {
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    console.log('API URL:', process.env.REACT_APP_API_URL);
  }, []);

  const handleLogin = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/`, {
        username: 'admin',  // Replace with your actual username
        password: 'adminpass',  // Replace with your actual password
      })
      .then((response) => {
        localStorage.setItem('authToken', response.data.token);
        console.log('Token stored:', response.data.token); // Add this line for debugging
        openModal(SampleModal, {}, {});
      })
      .catch((error) => console.error(error));
  };

  const handleOpenConfirmation = () => {
    openModal(ConfirmationModal, {
      message: 'Are you sure you want to proceed?',
      onConfirm: () => console.log('Confirmed!'),
    });
  };

  const handleOpenForm = () => {
    openModal(FormModal);
  };

  return (
    <div>
      <h1>Welcome to the Modal Management System</h1>
      <button onClick={handleLogin}>Open Sample Modal</button>
      <button onClick={handleOpenConfirmation}>Open Confirmation Modal</button>
      <button onClick={handleOpenForm}>Open Form Modal</button>
    </div>
  );
};

export default MainComponent;
