import React from "react";
import { useSelector } from "react-redux";

import Items from "../Items/Items";

function Menu(props) {
  const items = useSelector((state) => state.items.items);
  const menuitems = items.filter((item) =>
    item.name.toLowerCase().includes(props.inputValue.toLowerCase())
  );
  return <Items items={menuitems} />;
}

export default Menu;
