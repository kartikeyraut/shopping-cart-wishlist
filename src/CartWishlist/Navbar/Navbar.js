import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navbarActions } from "../store/navbar-slice";

function Navbar() {
  const dispatch = useDispatch()
  const navbar=useSelector(state=>state.navbar)
  
  const navbarItemClicked=(item)=>{
    dispatch(navbarActions.navbarItemClicked(item))
  }
  return (
    <header>
      <nav>
        <div className="bg-gray-800 rounded-xl p-4 my-2 flex items-center justify-between text-white">
          <button
            className={` mr-4 p-2 rounded-xl  font-bold ${navbar.active==='menu'?'bg-gray-50 text-blue-900':'bg-gray-400 text-black'}`}
            onClick={() => navbarItemClicked("menu")}
          >
            Menu
          </button>

          <div className="flex">
            <button
              className={` mr-4 p-2 rounded-xl text-red-500 ${navbar.active==='wishlist'?'bg-gray-50 ':'bg-gray-400 '}`}
              onClick={() => navbarItemClicked("wishlist")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <button
              className={`${navbar.active==='cart'?'bg-gray-50 ':'bg-gray-400 '} mr-2 p-2 rounded-xl text-blue-900`}
              onClick={() => navbarItemClicked("cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
