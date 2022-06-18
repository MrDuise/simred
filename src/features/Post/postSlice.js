import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: {}
};

export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {
        setPost: (state, action) => {
            state.post = action.payload;
        }
    }
});

export const { setPost } = postSlice.actions;
export const selectPost = (state) => state.post.post;
export default postSlice.reducer;