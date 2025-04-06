import { createSlice } from "@reduxjs/toolkit";

const psychologistsSlice = createSlice({
  name: "psychologists", // Ім'я слайсу
  initialState: {
    psychologistsList: [],
    isLoading: false,
  },
  // Об'єкт редюсерів - функції-редюсери (функції, що змінюють стан).
  reducers: {
    getLoading(state, action) {
      state.isLoading = true;
    },
    getPsychologists(state, action) {
      state.psychologistsList = [...action.payload];
      state.isLoading = false;
    },
  },
});

//Селектор для отримання списку психологів зі стану.

export const selectPsychologists = (state) =>
  state.psychologist.psychologistsList;

export const selectIsLoading = (state) => state.psychologist.isLoading;



//Експортується редюсер слайсу, щоб підключити його до store.
export const psychologistsReducer = psychologistsSlice.reducer;

//Експортуються дії (actions), щоб їх можна було викликати у компонентах або middleware (наприклад, в useDispatch).
export const { getPsychologists, getLoading } = psychologistsSlice.actions;
