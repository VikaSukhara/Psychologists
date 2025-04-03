import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLoggin: false,
//   user: null,
//   psychologist: {},
// };

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggin: false,
    user: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggin = true;
      state.user = action.payload;
    },
    logOut(state, action) {
      state.isLoggin = false;
      state.user = null;
    },
  },
});

//Експортується редюсер слайсу, щоб підключити його до store.
export const userReducer = userSlice.reducer;

//Експортуються дії (actions), щоб їх можна було викликати у компонентах або middleware (наприклад, в useDispatch).
export const { logIn, logOut } = userSlice.actions;
