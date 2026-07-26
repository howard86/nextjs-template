import { combineReducers, configureStore } from "@reduxjs/toolkit";

import localApi from "@/common/services/local";

const reducer = combineReducers({
  [localApi.reducerPath]: localApi.reducer,
});

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
