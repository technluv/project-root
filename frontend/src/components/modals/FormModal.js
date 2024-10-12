import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ModalContext } from '../../ModalContext';

const FormModal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const { closeModal } = useContext(ModalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');

    axios
      .post(
        'http://backend:8000/api/products/',
        { name, description, price, stock },
        { headers: { Authorization: `Token ${token}` } }
      )
      .then(() => {
        closeModal();
        // You might want to refresh the product list or show a success message here
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        margin: '50px auto',
        padding: '20px',
        maxWidth: '400px',
      }}
    >
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
        </div>
        <button type="submit">Add Product</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default FormModal;
