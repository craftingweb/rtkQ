import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceholder } from "./services/jsonPlaceholder";

const store = configureStore({
  reducer: {
    [jsonPlaceholder.reducerPath]: jsonPlaceholder.reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonPlaceholder.middleware),
  },
});

setupListeners(store.dispatch);
