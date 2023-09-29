import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TaskData, Tasks, Task } from "./interfaces/Tasks";

const initialState: Tasks = [];

const updateDb = (data: Tasks) => {
	axios
		.put("http://localhost:5000/tasks", {
			data: data,
		})
		.catch((error) => {
			alert(error.message);
		});
};

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, { payload }: PayloadAction<TaskData>) => {
			state.push({ id: Date.now(), ...payload });
			updateDb(state);
		},
		editTask: (state, { payload }: PayloadAction<Task>) => {
			const index = state.findIndex((task) => task.id === payload.id);
			state[index] = payload;
			updateDb(state);
		},
		deleteTask: (state, { payload }: PayloadAction<number>) => {
			const index = state.findIndex((task) => task.id === payload);
			state.splice(index, 1);
			updateDb(state);
		},
		markAsDone: (state, { payload }: PayloadAction<number>) => {
			const index = state.findIndex((task) => task.id === payload);
			state[index].done = true;
			updateDb(state);
		},
		reopen: (state, { payload }: PayloadAction<number>) => {
			const index = state.findIndex((task) => task.id === payload);
			state[index].done = false;
			updateDb(state);
		},
		loadTasks: (state, { payload }: PayloadAction<Tasks>) => {
			console.log(payload);
			payload.map((task) => state.push(task));
		},
	},
});

export const { addTask, editTask, deleteTask, markAsDone, reopen, loadTasks } =
	tasksSlice.actions;
export default tasksSlice.reducer;
