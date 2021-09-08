import { useDispatch } from "react-redux"
import { populateCart } from "../../store/cart"
import { toggleLike } from '../../store/produce';
function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch()

  let handleClick = (e) => {
    dispatch(populateCart(produce.id))
  }
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => dispatch(toggleLike(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button onClick = {handleClick}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
