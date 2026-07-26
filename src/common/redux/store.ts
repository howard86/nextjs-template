import { combineReducers, configureStore } from "@reduxjs/toolkit";

import localApi from "@/common/services/local";

const reducer = combineReducers({
  [localApi.reducerPath]: localApi.reducer,
});

export const makeStore = () =>
  configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localApi.middleware),
    reducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
