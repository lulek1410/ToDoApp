import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksSlice";
import dialogReducer from "./reducers/dialogSlice";
import asideReducer from "./reducers/asideSlice";

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		dialog: dialogReducer,
		aside: asideReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
