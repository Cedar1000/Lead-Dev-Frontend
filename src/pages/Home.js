import { useEffect, useState } from 'react';
import axios from '../uitils/axios';

import { useOrderItemsContext } from '../hooks/useOrderItemsContext';
import { useAuthContext } from '../hooks/useAuthContext';

// components
import OrderItems from '../components/OrderItems';
import Pagination from '../components/Pagination';

const Home = () => {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(null);

  const { orderItems, dispatch } = useOrderItemsContext();

  const { user } = useAuthContext();

  const fetchOrderItems = async (offset = 1) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const token = user ? user.token : '';

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const { data } = await axios.get(`/order_items?offset=${offset}`);

    setPage(data.page);
    setMaxPages(data.maxPages);

    if (data) {
      dispatch({ type: 'SET_ORDER_ITEMS', payload: data.data });
    }
  };

  useEffect(() => {
    user && fetchOrderItems();
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {orderItems &&
          orderItems.map((orderItem) => (
            <OrderItems key={orderItem.id} orderItem={orderItem} />
          ))}
      </div>

      <Pagination
        fetchOrderItems={fetchOrderItems}
        page={page}
        maxPages={maxPages}
      />
    </div>
  );
};

export default Home;
