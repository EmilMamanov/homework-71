import {configureStore} from "@reduxjs/toolkit";
import {dishesReducer} from "../store/dishSlice.ts";
import {cartReducer} from "../store/cartSlice.ts";

export const store = configureStore({
    reducer: {
        dish: dishesReducer,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
