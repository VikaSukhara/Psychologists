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
  whitelist: ["user"], // Тільки favourite буде зберігатися
};

const rootReducer = combineReducers({
  psychologist: psychologistsReducer,
  user: userReducer,
  filter: filteredReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// persistReducer() додає можливість збереження стану в локальному сховищі.

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //функція, яка повертає набір стандартних middleware, які включає Redux Toolkit. Вона за замовчуванням додає redux-thunk та serializableCheck.
      serializableCheck: false, // Вимикаємо перевірку серіалізації(нестандартні) для persist
    }),
});

export const persistor = persistStore(store);
// persistStore() зберігає Redux-стан у LocalStorage.
