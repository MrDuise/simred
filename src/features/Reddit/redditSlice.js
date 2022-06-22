import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPostsReddit = createAsyncThunk(
  'reddit/fetchReddit',

  async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const json = await response.json();

    //all the posts are stored in the data.children array and each post is an object
    const posts = json.data.children.map((child) => child.data);
    console.log(posts);
    return posts;
  }
);

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
      .addCase(fetchPostsReddit.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchPostsReddit.fulfilled, (state, action) => {
       
        console.log(action.payload);
        state.posts = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchPostsReddit.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { setSearchTerm, setSelectedSubreddit } = redditSlice.actions;
export const selectRedditPosts = (state) => state.reddit.posts;
export const selectRedditSearchTerm = (state) => state.reddit.searchTerm;
export const selectRedditSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;
export const isPostsLoading = (state) => state.reddit.loading;
export const selectRedditError = (state) => state.reddit.error;

export default redditSlice.reducer;
