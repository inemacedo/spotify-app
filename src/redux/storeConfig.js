import { createStore } from "redux";
import albumsReducer from "./albumsReducer";

const store = createStore(
  albumsReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;
