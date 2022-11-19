import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

import {  contactReducer } from "./contactsSlice";
import { filter } from "./filterSlice";


export const store = configureStore({
    reducer: {
       contacts: contactReducer,
       filter, 
    },
    middleware: getDefaultMiddleware=>  getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
