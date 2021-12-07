import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, updateItems } from "./store/items/items-actions";
import { itemsActions } from "./store/items/items-slice";

let isInitial = 0;

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const apiNotWorking = useSelector((state) => state.items.apiNotWorking);
  const updatedWhat = useSelector((state) => state.items.updatedWhat);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);


  useEffect(() => {
    if (isInitial < 2) {
      isInitial++;
      return;
    }
    if(!apiNotWorking)
    {
      dispatch(updateItems(items,updatedWhat));
    }
    
    else
    {
      dispatch(itemsActions.pushNotification({updatedWhat}));
    }
  }, [items,dispatch]);

  return (
    <div>
      <div className="max-w-4xl mx-auto h-screen">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
