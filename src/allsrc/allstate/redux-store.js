import { combineReducers, legacy_createStore } from "redux";
import messageReducer from "./message-reducer";
import postsReducer from "./posts-reducer";

let reducers = combineReducers({
  posts: postsReducer,
  dialogs: messageReducer,
});
let store = legacy_createStore(reducers);

export default store;
