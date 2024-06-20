import { createSlice } from "@reduxjs/toolkit";

const apiobjSlice = createSlice({
    name: "apiobj",
    initialState: {
        resp: null,
        topic: 'world',
        resp_for_page: null
    },
    reducers: {
        // multiple actions
        getresponse: (state, action) => {
            state.resp = action.payload;
        },
        reset_resp_for_page: (state) => {
            state.resp_for_page = state.resp.slice(0, 10);
        },
        getresp_for_page: (state, action) => {
            if (action.payload.end != 'ALL') state.resp_for_page = state.resp.slice(action.payload.start, action.payload.end);
            else state.resp_for_page = state.resp.slice(action.payload.start);
        },
        getTopic: (state, action) => {
            state.topic = action.payload;
        },
        null_resp_for_page: (state) => {
            state.resp_for_page = null;
        }

    }
});
export const { getresponse, reset_resp_for_page, getresp_for_page, getTopic, null_resp_for_page } = apiobjSlice.actions;
export default apiobjSlice.reducer;

