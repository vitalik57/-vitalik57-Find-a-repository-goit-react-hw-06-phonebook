import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { itemsReducer } from "./clientsReducer";
import filterReducer from "./filterReduser";

const rootReducer = combineReducers({ items: itemsReducer, filter: filterReducer });

const store = configureStore({
  reducer: {
    contacts: rootReducer
  }
});
export default store;
