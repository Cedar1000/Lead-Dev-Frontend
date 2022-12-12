import { createContext, useReducer } from 'react';

export const OrderItemsContext = createContext();

export const orderItemsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ORDER_ITEMS':
      return {
        orderItems: action.payload,
      };
    case 'CREATE_ORDER_ITEM':
      return {
        orderItems: [action.payload, ...state.orderItems],
      };
    case 'DELETE_ORDER_ITEM':
      return {
        orderItems: state.orderItems.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};

export const OrderItemsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderItemsReducer, {
    orderItems: null,
  });

  return (
    <OrderItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OrderItemsContext.Provider>
  );
};
