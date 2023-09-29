import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "./interfaces/Tasks";

interface DialogState {
	isOpen: boolean;
	dialogData?: Task;
}

const initialState: DialogState = {
	isOpen: false,
};

export const dialogSlice = createSlice({
	name: "dialog",
	initialState,
	reducers: {
		openDialog: (state, action: PayloadAction<Task | undefined>) => {
			state.isOpen = true;
			state.dialogData = action?.payload;
		},
		closeDialog: (state) => {
			state.isOpen = false;
			state.dialogData = undefined;
		},
	},
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
