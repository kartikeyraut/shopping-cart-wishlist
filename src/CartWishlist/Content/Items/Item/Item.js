import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../../store/items/items-slice";

function Item(props) {
  const dispatch = useDispatch();
  const activeNavbarItem = useSelector((state) => state.navbar.active);
  const toggleWishlistHandler = () => {
    dispatch(itemsActions.toggleWishList({ id: props.id }));
  };

  const updateCartHandler = (type) => {
    dispatch(itemsActions.updateCart({ id: props.id, type: type }));
  };
  return (
    <div className="m-2 mb-6 bg-red-200 rounded-xl flex h-32 p-4 justify-between relative">
      {activeNavbarItem !== "cart" ? (
        <button
          className={`absolute rounded-full top-0 right-0 h-6 w-6 m-2 ${
            props.inWishlist ? "text-red-500" : "text-gray-500"
          } sm:hover:bg-gray-500 sm:hover:text-yellow-50`}
          onClick={toggleWishlistHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : null}
      <div className="flex my-auto">
        <img
          alt={props.img}
          src={require("../../../store/images/" + props.img).default}
          className="h-20 w-20 sm:h-32 sm:w-32 rounded-xl  "
        />

        <div className="ml-2">
          <p className="text-black text-lg sm:text-2xl font-bold my-auto">{props.name}</p>
          <p>Price &#8377; {props.price}</p>
        </div>
      </div>

      <div className="text-white text-2xl my-auto text-center pt-4">
        {props.inCart === 0 ? (
          <button
            className="px-2 w-24 h-8  text-sm bg-green-400 sm:hover:bg-green-500"
            onClick={() => updateCartHandler("add")}
          >
            Add To Cart
          </button>
        ) : (
          <div className=" bg-green-400 w-24 h-8 flex">
            <button
              className="w-8 sm:hover:bg-green-500"
              onClick={() => updateCartHandler("remove")}
            >
              -
            </button>

            <span className="w-8">{props.inCart}</span>
            <button
              className="w-8 sm:hover:bg-green-500"
              onClick={() => updateCartHandler("add")}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
