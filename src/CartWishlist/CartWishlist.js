import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/index";
function CartWishlist() {
  return (
    <Provider store={store}>
      <div>
        <Toaster
          position="bottom-center"
          reverseOrder={true}
          toastOptions={{
            duration: 1500,
          }}
        />
      </div>
      <App />
    </Provider>
  );
}

export default CartWishlist;
