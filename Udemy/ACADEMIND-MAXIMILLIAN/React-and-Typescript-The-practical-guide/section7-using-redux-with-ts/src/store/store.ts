import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
});

export type Rootstate =ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;