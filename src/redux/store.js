import { configureStore } from "@reduxjs/toolkit";
import reducer from "./hamburger/reducer";

const store = configureStore({
    reducer,
});

export default store;
