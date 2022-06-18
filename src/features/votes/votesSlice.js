import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle'
};

export const votesSlice = createSlice({
    name: 'votes',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    }
});

export const { increment, decrement } = votesSlice.actions;


export const selectVotes = (state) => state.votes.value;

export default votesSlice.reducer;