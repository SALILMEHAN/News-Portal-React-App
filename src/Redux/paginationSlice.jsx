import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1,
        limit: 50,
    },
    reducers: {
        // multiple actions
        getlimit: (state, action) => {
            state.limit = action.payload;
        },
        nextPage: (state) => {
            state.page += 1;
        },
        prevPage: (state) => {
            state.page -= 1;
        },
        reset_page: (state) => {
            state.page = 1;
        }

    }
});
export const { getlimit, nextPage, prevPage, reset_page } = paginationSlice.actions;
export default paginationSlice.reducer;

