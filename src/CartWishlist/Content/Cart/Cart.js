import React, { Fragment} from "react";
import { useSelector } from "react-redux";
import Items from "../Items/Items";

function Cart() {
  const items = useSelector((state) => state.items.items);
  const cart = items.filter((item) => {
    return item.inCart;
  });
  const total = cart.reduce((total, item) => {
    return total + item.price * item.inCart;
  }, 0);

  const onOrderHandler=()=>{
    alert("YaY! You have placed your order.")
  }

  return (
    <Fragment>
      <Items items={cart} />
      {total ? (
        <div className="w-64 flex flex-col p-4 mx-auto bg-gray-400 rounded-lg  font-bold">
          <p className="mx-auto">Total : &#8377; {total}</p>
          <button className=" w-24 h-8 mt-4 mx-auto bg-green-400 rounded-lg sm:hover:bg-green-500"
          onClick={onOrderHandler}>
            Order
          </button>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Cart;
