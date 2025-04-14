import { createSlice } from "@reduxjs/toolkit";

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: {
    psychologistsList: [],
    isLoading: false,
  },

  reducers: {
    getLoading(state, action) {
      state.isLoading = true;
    },
    getPsychologists(state, action) {
      state.isLoading = false;
      state.psychologistsList = [...action.payload];
    },
  },
});

export const selectPsychologists = (state) =>
  state.psychologist.psychologistsList;

export const selectIsLoading = (state) => state.psychologist.isLoading;

export const psychologistsReducer = psychologistsSlice.reducer;
export const { getPsychologists, getLoading } = psychologistsSlice.actions;
