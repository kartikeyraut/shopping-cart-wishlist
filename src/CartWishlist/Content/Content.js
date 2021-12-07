import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";
import Wishlist from "./Wishlist/Wishlist";
function Content() {
  const navbarItem = useSelector((state) => state.navbar.active);
  const [inputValue,setinputValue] = useState('')
  const renderSwitch = (navbarItem) => {
    switch (navbarItem) {
      case "menu":
        return <Menu inputValue={inputValue}/>;
      case "wishlist":
        return <Wishlist inputValue={inputValue}/>;
      default:
        return <Cart />;
    }
  };
  useEffect(()=>{
    inputValue !== '' && setinputValue('');
  },[navbarItem])
  const onInputChangeHandler=(event)=>{
    setinputValue(event.target.value)
  }
  return (
    <div className="text-black min-h-full pb-4 rounded-xl bg-gray-200">
      <div className="flex align-center flex-col sm:flex-row">
        <div className="flex-1 rounded-xl mx-auto bg-gray-200 text-2xl sm:text-4xl m-1 mb-0 sm:m-2 p-2 pl-6 font-bold">
          {navbarItem.toUpperCase()}
        </div>
        {navbarItem !== "cart" ? (
          <div className="flex-1 rounded-xl p-1 m-2 sm:p-2 bg-white">
            <input
              className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none focus:bg-white  focus:text-black w-full text-black  border-gray-200 rounded-md py-1 sm:py-2 pl-2 bg-transparent "
              type="text"
              placeholder="Type to search.."
              value={inputValue}
              onChange={(event)=>{onInputChangeHandler(event)}}
            />
          </div>
        ) : null}
      </div>
      {renderSwitch(navbarItem)}
    </div>
  );
}

export default Content;
