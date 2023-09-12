import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Task {
	title: string;
	description: string;
	dueDate: string;
}

interface TasksState {
	tasks: Array<Task>;
}

const initialState: TasksState = {
	tasks: [
		{
			title: "Task-1",
			description: "description",
			dueDate: "2024-09-30",
		},
		{
			title: "Task-2",
			description: "description 2",
			dueDate: "2023-12-30",
		},
		{
			title: "Task-3",
			description: "description 3",
			dueDate: "2023-10-12",
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
