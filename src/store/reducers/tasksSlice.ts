import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "./interfaces/Task";
import { getDatesDiffInDays } from "../../utils/getDatesDiffInDays";
import { getCurrentDate } from "../../utils/getCurrentDate";

const initialState: Array<Task> = [
	{
		id: 1,
		title: "Task-1",
		description: "description",
		dueDate: "2024-09-30",
		done: false,
		overdueDays: 0,
	},
	{
		id: 2,
		title: "Task-2",
		description: "description 2",
		dueDate: "2023-12-30",
		done: false,
		overdueDays: 0,
	},
	{
		id: 3,
		title: "Task-3",
		description: "description 3",
		dueDate: "2023-08-12",
		done: false,
		overdueDays: 0,
	},
];

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
		updateTasks: (state) => {
			const today = getCurrentDate();
			console.log("update");
			state.map(
				(task) => (task.overdueDays = getDatesDiffInDays(task.dueDate, today))
			);
		},
	},
});

export const { addTask, editTask, deleteTask, updateTasks } =
	tasksSlice.actions;
export default tasksSlice.reducer;
