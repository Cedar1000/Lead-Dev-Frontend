import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from '../uitils/axios';

import { useAuthContext } from '../hooks/useAuthContext';

const EditOrderItem = () => {
  const { user } = useAuthContext();
  const { id } = useParams();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [price, setPrice] = useState(null);
  const [freight_value, setFreightValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.patch(`/order_items/${id}`, { price, freight_value });

    navigate('/');
  };

  const editOrderItem = async () => {
    const responese = await axios.get(`/order_items/${id}`);

    const { freight_value, price } = responese.data.data;

    setPrice(price);
    setFreightValue(freight_value);
  };

  useEffect(() => {
    user && editOrderItem();
  }, []);

  return (
    <form className="input" onSubmit={handleSubmit}>
      <h3>Edit Order Item</h3>

      <label>Price:</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <label>Freight Value:</label>
      <input
        type="text"
        onChange={(e) => setFreightValue(e.target.value)}
        value={freight_value}
      />

      <button disabled={isLoading}>Edit Order Item</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default EditOrderItem;
