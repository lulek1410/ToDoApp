import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "./interfaces/Task";

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
		openDialog: (state, action?: PayloadAction<Task>) => {
			state.isOpen = true;
			if (action) {
				state.dialogData = action.payload;
			}
		},
		closeDialog: (state) => {
			state.isOpen = false;
			state.dialogData = undefined;
		},
	},
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
