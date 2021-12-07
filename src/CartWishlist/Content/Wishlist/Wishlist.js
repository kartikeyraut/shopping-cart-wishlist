import React from "react";
import { useSelector } from "react-redux";
import Items from "../Items/Items";

function Wishlist(props) {
  const items = useSelector((state) => state.items.items);
  let wishlist = items.filter((item) => {
    return item.inWishlist;
  });
  wishlist = wishlist.filter((item) =>
    item.name.toLowerCase().includes(props.inputValue.toLowerCase())
  );

  return <Items items={wishlist} />;
}

export default Wishlist;
