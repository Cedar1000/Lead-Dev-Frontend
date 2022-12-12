import { OrderItemsContext } from '../context/OrderItemsContext';
import { useContext } from 'react';

export const useOrderItemsContext = () => {
  const context = useContext(OrderItemsContext);

  if (!context) {
    throw Error(
      'useOrderItemsContext must be used inside an OrderItemsContextProvider'
    );
  }

  return context;
};
