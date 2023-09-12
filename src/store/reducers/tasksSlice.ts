import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface Task {
	name: string;
	description: string;
	dueDate: string;
}

interface TasksState {
	tasks: Array<Task>;
}

const initialState: TasksState = {
	tasks: [
		{
			name: "Task-1",
			description: "description",
			dueDate: "30.09.2024",
		},
		{
			name: "Task-2",
			description: "description 2",
			dueDate: "30.12.2023",
		},
		{
			name: "Task-3",
			description: "description 3",
			dueDate: "12.10.2023",
		},
	],
};

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.tasks.push(action.payload);
		},
		editTask: (state) => {},
		deleteTask: (state) => {},
	},
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
