import { createSlice } from "@reduxjs/toolkit";
import { saveFavouritesToLocalStorage } from "../../utils/localStorageUtils";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggin: false,
    user: null,
    favouritesList: [],
  },
  reducers: {
    logIn(state, action) {
      state.isLoggin = true;
      state.user = {
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.favouritesList = action.payload.favouritesList;
    },
    logOut(state, action) {
      state.isLoggin = false;
      state.user = null;
      state.favouritesList = [];
    },

    addFavourite(state, action) {
      if (!Array.isArray(state.favouritesList)) {
        state.favouritesList = [];
      }
      state.favouritesList.push(action.payload);
      saveFavouritesToLocalStorage(state.user.uid, state.favouritesList);
    },
    deleteFavourite(state, action) {
      state.favouritesList = state.favouritesList.filter(
        (item) => item.id !== action.payload
      );
      saveFavouritesToLocalStorage(state.user.uid, state.favouritesList); // Оновлюємо localStorage
    },
  },
});

export const selectorIsLoggin = (state) => state.user.isLoggin;
export const selectFavourites = (state) => state.user.favouritesList;

export const userReducer = userSlice.reducer;

export const { logIn, logOut, addFavourite, deleteFavourite } =
  userSlice.actions;
