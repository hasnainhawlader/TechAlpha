import { configureStore } from "@reduxjs/toolkit";

import productsReducer, {
  productsFetching,
} from "../feature/products/productSlice";
import cartReduser from "../feature/products/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReduser,
  },
});

store.dispatch(productsFetching());
