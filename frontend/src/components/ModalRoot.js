import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';

const ModalRoot = () => {
  const { modals, closeModal } = useContext(ModalContext);

  return (
    <>
      {modals.map(({ Component, props, config, id }, index) => (
        <div
          key={id}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000 + index,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
          onClick={() => closeModal(id)}
        >
          <div
            style={{
              margin: '100px auto',
              padding: 20,
              background: '#fff',
              width: config?.width || '500px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Component {...props} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ModalRoot;
