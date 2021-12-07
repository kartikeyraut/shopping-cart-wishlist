import axios from "axios";
import toast from "react-hot-toast";
import { apiUrl } from "../API";
import { itemsActions } from "./items-slice";

const setItemsIfFetchFails = (dispatch) => {
  const items = [
    {
      id: 0,
      name: "Burger",
      price: "80",
      img: "burger.jpeg",
      inWishlist: true,
      inCart: 0,
    },
    {
      id: 1,
      name: "Chicken Biryani",
      price: "120",
      img: "chicken_biryani.jpeg",
      inWishlist: true,
      inCart: 2,
    },
    {
      id: 2,
      name: "Chilli Momos",
      price: "80",
      img: "chili_momo.jpeg",
      inWishlist: false,
      inCart: 3,
    },
    {
      id: 3,
      name: "Dry Manchurian",
      price: "60",
      img: "dry_manchurian.jpeg",
      inWishlist: true,
      inCart: 0,
    },
    {
      id: 4,
      name: "Fried Rice",
      price: "90",
      img: "fried_rice.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 5,
      name: "Fries",
      price: "110",
      img: "fries.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 6,
      name: "Fried Momos",
      price: "70",
      img: "fry_momo.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 7,
      name: "Gravy Manchurian",
      price: "80",
      img: "gravy_manchurian.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 8,
      name: "Maggie",
      price: "30",
      img: "maggie.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 9,
      name: "Noodles",
      price: "50",
      img: "noodles.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 10,
      name: "Pasta",
      price: "90",
      img: "pasta.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 11,
      name: "Pizza",
      price: "200",
      img: "pizza.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 12,
      name: "Sandwitch",
      price: "80",
      img: "sandwich.jpeg",
      inWishlist: false,
      inCart: 0,
    },
    {
      id: 13,
      name: "Steamed Momos",
      price: "60",
      img: "steam_momo.jpeg",
      inWishlist: false,
      inCart: 0,
    },
  ];
  dispatch(itemsActions.setItems({ items }));
};

export const fetchItems = () => {
  return (dispatch) => {
    axios
      .get(apiUrl + "items.json")
      .then((response) => {
        console.log("fetched items");
        dispatch(itemsActions.setItems({ items: response.data }));
      })
      .catch((error) => {
        setItemsIfFetchFails(dispatch);
        dispatch(itemsActions.toggleApiNotWorking());
        console.log("OOPS! Something went Wrong");
      });
  };
};

export const updateItems = (items, updatedWhat) => {
  return (dispatch) => {
    axios({
      method: "patch",
      url: apiUrl + "items.json",
      data: {
        ...items,
      },
    })
      .then((response) => {
        console.log("items updated");
        dispatch(itemsActions.pushNotification({updatedWhat}))
      })
      .catch((error) => {
        console.log("OOPS! Something went Wrong");
        console.log(error);
        // alert('OOPS! Something went Wrong')
      });
  };
};
