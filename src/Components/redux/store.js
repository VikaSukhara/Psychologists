import { combineReducers } from "redux";

import { psychologistsReducer } from "./psychologistsSlice";
import { userReducer } from "./userSlice";
import { filteredReducer } from "./filtersReducer";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"; // Використовуємо LocalStorage
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  psychologist: psychologistsReducer,
  user: userReducer,
  filter: filteredReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
