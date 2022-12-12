import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../uitils/axios';

import { useOrderItemsContext } from '../hooks/useOrderItemsContext';
import { useAuthContext } from '../hooks/useAuthContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const OrderItems = ({ orderItem }) => {
  const [showMore, setShowMore] = useState(false);

  const { dispatch } = useOrderItemsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const seller = JSON.parse(localStorage.getItem('user'));

    const token = seller ? seller.token : '';

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    await axios.delete(`/order_items/${orderItem.id}`);

    dispatch({ type: 'DELETE_ORDER_ITEM', payload: orderItem.id });
  };

  return (
    <div className="workout-details">
      <h4>{orderItem.id}</h4>
      <p>
        <strong>Category Name: </strong>
        {orderItem.product_category_name}
      </p>

      <p>
        <strong>Date: </strong>

        {formatDistanceToNow(new Date(orderItem.date), {
          addSuffix: true,
        })}
      </p>

      {showMore ? (
        <div>
          <p>
            <strong>Product Id: </strong>
            {orderItem.product_id}
          </p>

          <p>
            <strong>Price: </strong>${orderItem.price}
          </p>
        </div>
      ) : (
        ''
      )}

      <p className="see-more" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'see less' : 'see more'}
      </p>

      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>

      <Link to={`/edit/${orderItem.id}`}>
        <span className="material-symbols-outlined edit">edit</span>
      </Link>
    </div>
  );
};

export default OrderItems;
