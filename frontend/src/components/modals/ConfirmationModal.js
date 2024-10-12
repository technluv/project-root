import React, { useContext } from 'react';
import { ModalContext } from '../../ModalContext';

const ConfirmationModal = ({ message, onConfirm }) => {
  const { closeModal } = useContext(ModalContext);

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        margin: '100px auto',
        padding: '20px',
        maxWidth: '300px',
        textAlign: 'center',
      }}
    >
      <h2>Confirmation</h2>
      <p>{message}</p>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default ConfirmationModal;
