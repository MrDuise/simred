import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchReddit = createAsyncThunk('reddit/fetchReddit', async () => {
  const response = await fetch('https://www.reddit.com/r/popular.json');
  const data = await response.json();
  return data.data.children;
});

const initialState = {
  posts: [],
  error: false,
  loading: false,
  searchTerm: '',
  selectedSubreddit: '',
};

const redditSlice = createSlice({
  name: 'reddit',
  initialState: initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReddit.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchReddit.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchReddit.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { setSearchTerm, setSelectedSubreddit } = redditSlice.actions;
export const selectRedditPosts = (state) => state.reddit.posts;
export const selectRedditSearchTerm = (state) => state.reddit.searchTerm;
export const selectRedditSelectedSubreddit = (state) => state.reddit.selectedSubreddit;
export const selectRedditLoading = (state) => state.reddit.loading;
export const selectRedditError = (state) => state.reddit.error;

export default redditSlice.reducer;
