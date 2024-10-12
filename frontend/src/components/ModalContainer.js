import React, { useContext } from 'react';
import { ModalContext } from '../ModalContext';

const ModalContainer = () => {
  const { modals } = useContext(ModalContext);

  return (
    <>
      {modals.map((modal, index) => {
        const ModalComponent = modal.component;
        return (
          <div
            key={index}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1000 + index,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            <ModalComponent {...modal.props} />
          </div>
        );
      })}
    </>
  );
};

export default ModalContainer;
