import { configureStore } from '@reduxjs/toolkit';
import votesReducer from '../features/votes/votesSlice';

export const store = configureStore({
  reducer: {
    votes: votesReducer,
  },
});
