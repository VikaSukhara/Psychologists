import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favouritesList: [],
  },
  reducers: {
    addFavourite(state, action) {
      state.favouritesList = [...state.favouritesList, action.payload];
    },
    deleteFavourite(state, action) {
      state.favouritesList = state.favouritesList.filter( (item) => item.id !== action.payload
      );
      
    },
  },
});

export const selectFavourites = (state) => state.favourite.favouritesList;
export const favouriteReducer = favouriteSlice.reducer;
export const { addFavourite, deleteFavourite } = favouriteSlice.actions;

// const isFavorite = state.favouritesList.some(
//   (fav) => fav.id === action.payload.id
// );

// favouritesList: state.favouritesList.filter(
//   // створює новий масив, в якому зберігаються лише ті елементи, що проходять перевірку в наданій функції. Якщо елемент не проходить перевірку, він не потрапляє до нового масиву.
//   (fav) => fav.id !== action.payload.id

// Функція порівнює: fav.id !== action.payload.id, тобто 1 !== 2.   -  Умова виконана (правда), тому цей елемент потрапляє до нового масиву.
// Друга ітерація:
// Функція порівнює: fav.id !== action.payload.id, тобто 2 !== 2.   - Умова не виконана (неправда), тому цей елемент не потрапляє до нового масиву (він буде видалений).
