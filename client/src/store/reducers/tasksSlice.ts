import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "./interfaces/Task";

const initialState: Array<Task> = [];

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, { payload }: PayloadAction<Task>) => {
			state.push(payload);
		},
		editTask: (state, { payload }: PayloadAction<Task>) => {
			const index = state.findIndex((task) => task.id === payload.id);
			state[index] = payload;
		},
		deleteTask: (state, { payload }: PayloadAction<number>) => {
			const index = state.findIndex((task) => task.id === payload);
			state.splice(index, 1);
		},
		markAsDone: (state, { payload }: PayloadAction<number>) => {
			const index = state.findIndex((task) => task.id === payload);
			state[index].done = true;
		},
		reopen: (state, { payload }: PayloadAction<number>) => {
			const index = state.findIndex((task) => task.id === payload);
			state[index].done = false;
		},
		loadTasks: (state, { payload }: PayloadAction<Array<Task>>) => {
			payload.map((task) => state.push(task));
		},
	},
});

export const { addTask, editTask, deleteTask, markAsDone, reopen, loadTasks } =
	tasksSlice.actions;
export default tasksSlice.reducer;
