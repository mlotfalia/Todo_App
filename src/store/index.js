import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import todosReducer from "./slices/todosSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
