import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Filter = "All" | "Overdue" | "Done" | "To do";

interface AsideState {
	isOpen: boolean;
	selectedFilter: Filter;
}

const initialState: AsideState = {
	isOpen: false,
	selectedFilter: "All",
};

export const asideSlice = createSlice({
	name: "aside",
	initialState,
	reducers: {
		toggleAsideMenu: (state) => {
			state.isOpen = !state.isOpen;
		},
		setFilter: (state, { payload }: PayloadAction<Filter>) => {
			state.selectedFilter = payload;
		},
	},
});

export const { toggleAsideMenu, setFilter } = asideSlice.actions;
export default asideSlice.reducer;
