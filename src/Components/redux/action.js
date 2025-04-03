import { createAction } from "@reduxjs/toolkit";

export const loginUser = (user) => ({
  type: "user/LOGIN",
  payload: user, // Тут має бути об'єкт з даними користувача
});

export const logoutUser = () => ({
  type: "user/LOGOUT",
});



export const filterAction = (filteredValue) => ({
  type: "filtered/list",
  payload: filteredValue,
});

export const favouriteAction = (psychologist) => ({
  type: "favourite/list",
  payload: psychologist,
});





// const loginUser = createAction("user/LOGIN");
// const logoutUser = createAction("user/LOGOUT");
// const filterAction = createAction("filtered/list")
// const favouriteAction = createAction("favourite/list");