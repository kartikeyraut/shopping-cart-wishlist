import { createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    apiNotWorking: false,
    updatedWhat:{name:'',type:''},
  },
  reducers:{
      setItems(state,action){
          state.items=action.payload.items;
      },
      toggleWishList(state,action)
      {
        const id=action.payload.id;
        if(state.items[id].inWishlist)
        {
          state.updatedWhat={name:'wishlist',type:'remove'};
        }
        else
        {
          state.updatedWhat={name:'wishlist',type:'add'};
        }
        state.items[id].inWishlist=!state.items[id].inWishlist;
      },
      updateCart(state,action)
      {
        const id=action.payload.id;
        if(action.payload.type==='add')
        {
          state.items[id].inCart++;
          state.updatedWhat={name:'cart',type:'add'};
        }
        else{
          state.items[id].inCart--;
          state.updatedWhat={name:'cart',type:'remove'};
        }
        
      },
      toggleApiNotWorking(state)
      {
        state.apiNotWorking=!state.apiNotWorking;
      },
      pushNotification(state,action){
        if (action.payload.updatedWhat.name === "cart") {
          if (action.payload.updatedWhat.type === "add") toast("Added to Cart");
          else toast("Removed from Cart");
        } else {
          if (action.payload.updatedWhat.type === "add") toast("Added to wishlist");
          else toast("Removed from Wishlist");
        }
      }
  }
});

export const itemsActions = itemsSlice.actions;




// export const fetchItems = () => {
//   return (dispatch) => {
//     const items = [
//       { id: 0, name: "Burger", price: "80", img: "burger.jpeg" ,inWishlist: true , inCart: 0},
//       { id: 1, name: "Chicken Biryani", price: "120", img: "chicken_biryani.jpeg" ,inWishlist: false , inCart: 2},
//       { id: 2, name: "Chilli Momos", price: "80", img: "chili_momo.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 3, name: "Dry Manchurian", price: "60", img: "dry_manchurian.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 4, name: "Fried Rice", price: "90", img: "fried_rice.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 5, name: "Fries", price: "110", img: "fries.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 6, name: "Fried Momos", price: "70", img: "fry_momo.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 7, name: "Gravy Manchurian", price: "80", img: "gravy_manchurian.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 8, name: "Maggie", price: "30", img: "maggie.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 9, name: "Noodles", price: "50", img: "noodles.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 10, name: "Pasta", price: "90", img: "pasta.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 11, name: "Pizza", price: "200", img: "pizza.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 12, name: "Sandwitch", price: "80", img: "sandwich.jpeg" ,inWishlist: false , inCart: 0},
//       { id: 13, name: "Steamed Momos", price: "60", img: "steam_momo.jpeg" ,inWishlist: false , inCart: 0},
//     ];
//     dispatch(itemsActions.setItems({items:items}))
//     // console.log("fetch items data begun");
//     // axios
//     //   .get(apiUrl+'items.json')
//     //   .then((response) => {
//     //     console.log(response.data)
//     //     dispatch(itemsActions.setItems({items:response.data}))
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   })
//     //   .then(() => {
//     //     console.log("fetch items data end");
//     //   });
//   };
// };

export default itemsSlice;

// const items = [
//   { id: 0, name: "Burger", price: "80", img: "burger.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 1, name: "Chicken Biryani", price: "120", img: "chicken_biryani.jpeg" ,inWishlist: true , inCart: 2},
//   { id: 2, name: "Chilli Momos", price: "80", img: "chili_momo.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 3, name: "Dry Manchurian", price: "60", img: "dry_manchurian.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 4, name: "Fried Rice", price: "90", img: "fried_rice.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 5, name: "Fries", price: "110", img: "fries.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 6, name: "Fried Momos", price: "70", img: "fry_momo.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 7, name: "Gravy Manchurian", price: "80", img: "gravy_manchurian.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 8, name: "Maggie", price: "30", img: "maggie.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 9, name: "Noodles", price: "50", img: "noodles.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 10, name: "Pasta", price: "90", img: "pasta.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 11, name: "Pizza", price: "200", img: "pizza.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 12, name: "Sandwitch", price: "80", img: "sandwich.jpeg" ,inWishlist: true , inCart: 0},
//   { id: 13, name: "Steamed Momos", price: "60", img: "steam_momo.jpeg" ,inWishlist: true , inCart: 0},
// ];


// export const fetchMenuData = () => {
//   return () => {
//     console.log("Insert menu data begun");
//     axios
//       .patch(apiUrl+'items.json',{...menuitems})
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .then(() => {
//         console.log("Insert menu data end");
//       });
//   };
// }