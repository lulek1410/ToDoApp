import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksSlice";
import dialogReducer from "./reducers/dialogSlice";

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		dialog: dialogReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
