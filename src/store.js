import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./Redux/cartReducer";
import { userReducer } from "./Redux/userReducer";

export const store = configureStore({
  reducer: { cartReducer, userReducer }
});
