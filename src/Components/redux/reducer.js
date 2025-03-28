import { initialState } from "./store";

  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "user/LOGIN":
        return {
          ...state,
          isLoggin: true,
          user: action.payload, // Зберігаємо дані користувача
        };
      case "user/LOGOUT":
        return {
          ...state,
          isLoggin: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  