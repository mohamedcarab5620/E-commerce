import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "../Reducer/cart";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const config = {
  key: "root",
  storage
}

const allReducers = combineReducers({
  productCart: cart
})

const Reducers = persistReducer(config, allReducers)

const Store = configureStore({
  reducer: Reducers
})

export default Store
