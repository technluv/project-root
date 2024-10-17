import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ModalContext } from '../../ModalContext';

const SampleModal = () => {
  const [products, setProducts] = useState([]);
  const { closeModal } = useContext(ModalContext);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/products/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => setProducts(response.data))
.catch((error) => { 
  console.error(error); 
  alert("An error occurred: " + error.message); 
});
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'white',
        margin: '50px auto',
        padding: '20px',
        maxWidth: '500px',
      }}
    >
      <h2>Products</h2>
      <button onClick={closeModal}>Close</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SampleModal;
