import React from "react";
import Item from "./Item/Item";

function Items(props) {
  return (
    <div>
      {props.items.length ? (
        props.items.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              inWishlist={item.inWishlist}
              inCart={item.inCart}
              img={item.img}
            />
          );
        })
      ) : (
        <div className="flex flex-row justify-center mt-8 text-xl">
          So Empty!
        </div>
      )}
    </div>
  );
}

export default Items;
