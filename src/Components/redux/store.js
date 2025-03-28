import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import rootReducer from "./reducer";

export const initialState = {
  isLoggin: false,
  user: null,
};

const enhancer = devToolsEnhancer();



export const store = createStore(rootReducer, enhancer);

