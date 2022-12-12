import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OrderItemsContextProvider } from './context/OrderItemsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <OrderItemsContextProvider>
        <App />
      </OrderItemsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
