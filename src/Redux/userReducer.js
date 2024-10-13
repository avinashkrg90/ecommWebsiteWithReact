import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { loginState: false };

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        userLoggedIn : (state, action) => {
            state.loginState = true;
        },
        userLoggedOut : (state, action) => {
            state.loginState = false;
        }
    }
});

export const userReducer = userSlice.reducer;
export const {
    userLoggedIn,
    userLoggedOut,
} = userSlice.actions;

export const userSelector = (state) => state.userReducer;







