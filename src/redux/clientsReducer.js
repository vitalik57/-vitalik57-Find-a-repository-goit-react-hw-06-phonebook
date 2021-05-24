import { createReducer } from "@reduxjs/toolkit";
import { addContact, getAllContacts, removeContact } from "./clientsActions";

export const itemsReducer = createReducer([], {
  [getAllContacts]: (_, { payload }) => payload,
  [addContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) => [...state.filter(el => el.id !== payload)]
});
