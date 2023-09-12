import { createSlice } from "@reduxjs/toolkit";

interface Task {
	name: string;
	description: string;
	dueDate: Date;
}

interface TasksState {
	tasks: Array<Task>;
}

const initialState: TasksState = {
	tasks: [],
};

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state) => {},
		editTast: (state) => {},
		deleteTastk: (state) => {},
	},
});
