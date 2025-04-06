import { createSlice } from "@reduxjs/toolkit";
import { saveFavouritesToLocalStorage } from "../../utils/localStorageUtils";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggin: false,
    user: null,
    favouritesList: [], // Додаємо список вподобаних
  },
  reducers: {
    logIn(state, action) {
      console.log("action.payload", action.payload);

      state.isLoggin = true;
      state.user = {
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.favouritesList = action.payload.favouritesList; // Підтягуємо з localStorage
    },
    logOut(state, action) {
      state.isLoggin = false;
      state.user = null;
      state.favouritesList = []; // Очищаємо state при logout
    },

    addFavourite(state, action) {
      if (!Array.isArray(state.favouritesList)) {
        state.favouritesList = []; // Якщо з якоїсь причини favouritesList не масив, ініціалізуємо його
      }
      state.favouritesList.push(action.payload); // Додаємо новий елемент
      saveFavouritesToLocalStorage(state.user.uid, state.favouritesList); // Зберігаємо у localStorage
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

//Експортується редюсер слайсу, щоб підключити його до store.
export const userReducer = userSlice.reducer;

//Експортуються дії (actions), щоб їх можна було викликати у компонентах або middleware (наприклад, в useDispatch).
export const { logIn, logOut, addFavourite, deleteFavourite } =
  userSlice.actions;
