import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import pageReducer from "./feature/counter/pageSlice";
import placeReducer from "./feature/counter/placeSlice";
import locationReducer from "./feature/counter/locationSlice";
import townshipReducer from "./feature/counter/townshipSlice";
import nearLocationReducer from "./feature/counter/nearLocationSlice";
import userReducer from "./feature/counter/userSlice";
const pagepersistConfig = {
  key: "page",
  storage,
  whitelist: ["page"],
};
const userpersistConfig = {
  key: "user",
  storage,
  whitelist: ["data"],
};

const rootReducer = combineReducers({
  page: persistReducer(pagepersistConfig, pageReducer),
  user: persistReducer(userpersistConfig, userReducer),
  places: placeReducer,
  location: locationReducer,
  township: townshipReducer,
  nearLocation: nearLocationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
