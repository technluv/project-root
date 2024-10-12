import React from 'react';
import { ModalProvider } from './ModalContext';
import ModalContainer from './components/ModalContainer';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <ModalProvider>
      <MainComponent />
      <ModalContainer />
    </ModalProvider>
  );
}

export default App;
