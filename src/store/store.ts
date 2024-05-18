import { PreloadedStateShapeFromReducersMapObject, combineReducers, configureStore } from "@reduxjs/toolkit";
import swapReducer from "./reducers/swapReducer";

const rootReducer = combineReducers({
  swap: swapReducer,
});

export const setupStore = (preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

    preloadedState,
  });

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
