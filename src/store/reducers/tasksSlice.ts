import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "./interfaces/Task";

const initialState: Array<Task> = [
	{
		id: 1,
		title: "Task-1",
		description: "description",
		dueDate: "2024-09-30",
	},
	{
		id: 2,
		title: "Task-2",
		description: "description 2",
		dueDate: "2023-12-30",
	},
	{
		id: 3,
		title: "Task-3",
		description: "description 3",
		dueDate: "2023-10-12",
	},
];

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.push(action.payload);
		},
		editTask: (state) => {},
		deleteTask: (state, action: PayloadAction<number>) => {
			const index = state.findIndex((task) => task.id === action.payload);
			state.splice(index, 1);
		},
	},
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
