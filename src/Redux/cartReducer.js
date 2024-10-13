import all_product from "../Components/Assets/all_product";
import { collection, addDoc, doc, getDoc, setDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import db from "../firebase";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = { cartItems: [], totalQuantity: 0, totalPrice: 0  };

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const productId = action.payload;
            const exists = state.cartItems.find((item) => item.productId === Number(productId))
            const product = all_product.find((product, index)=>product.id === Number(productId));
            if (exists){
                console.log("same product added")
                exists.qty ++;
                state.totalQuantity ++;
                state.totalPrice += product.new_price;
            }else{
                state.cartItems.push({productId, qty:1});
                state.totalQuantity ++;
                state.totalPrice += product.new_price;
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            // const exists = state.cartItems.find((product) => product.id === productId)
            const index = state.cartItems.findIndex((item) => item.productId === Number(productId));
            const product = all_product.find((product, index)=>product.id === Number(productId));
            if (state.cartItems[index].qty > 1){
                state.cartItems[index].qty --;
                state.totalQuantity --;
                state.totalPrice -= product.new_price;
            }else{
                state.cartItems.splice(index, 1)
                state.totalQuantity --;
                state.totalPrice -= product.new_price;
            }
        },
        removeAllFromCart: (state, action) => {
            const productId = action.payload;
            
            // const exists = state.cartItems.find((product) => product.id === productId)
            const index = state.cartItems.findIndex((item) => item.productId === Number(productId));
            console.log(index)
            const tQty = state.cartItems[index].qty;
            const product = all_product.find((product, index)=>product.id === Number(productId));
            state.cartItems.splice(index, 1)
            state.totalQuantity -= tQty;
            state.totalPrice -= product.new_price*tQty;
        },
    }
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    removeFromCart,
    removeAllFromCart,
} = cartSlice.actions;

export const cartSelector = (state) => state.cartReducer;







