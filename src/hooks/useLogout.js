import { useAuthContext } from './useAuthContext';
import { useOrderItemsContext } from './useOrderItemsContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchOrderItem } = useOrderItemsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user');

    // dispatch logout action
    dispatch({ type: 'LOGOUT' });
    dispatchOrderItem({ type: 'SET_ORDER_ITEMS', payload: null });
  };

  return { logout };
};
