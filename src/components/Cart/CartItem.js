import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { populateCart, removeItem , decrementItem} from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeItem(item.id));
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">
        {item.name}
      </div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count} />
        <button
          className="cart-item-button"
          onClick = {()=>dispatch(populateCart(item.id))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick = {()=>dispatch(decrementItem(item.id))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleDelete}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CartItem;
