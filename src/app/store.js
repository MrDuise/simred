import { configureStore } from '@reduxjs/toolkit';

import redditReducer from '../features/Reddit/redditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
  },
});
