export const loginUser = (user) => ({
  type: "user/LOGIN",
  payload: user, // Тут має бути об'єкт з даними користувача
});

export const logoutUser = () => ({
  type: "user/LOGOUT",
});
