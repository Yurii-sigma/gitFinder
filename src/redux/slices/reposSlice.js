import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReposAction = createAsyncThunk(
  "repos/list",
  async (selectedUser, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${selectedUser}/repos?per_page=700&sort=asc`
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProfileAction = createAsyncThunk(
  "profile/list",
  async (selectedUser, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${selectedUser}`
      );

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUsersAction = createAsyncThunk(
  "users/list",
  async (search, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${search}`
      );
 
      return data.items;
    } catch (error) {
      if (!error?.response) {
        throw error;  
      }
      return rejectWithValue(error.response.data);
    }
  }
);


const reposSlices = createSlice({
  name: "repos",
  initialState: {},
  extraReducers: builder => {
    builder.addCase(fetchReposAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchReposAction.fulfilled, (state, action) => {
      state.reposList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchReposAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.reposList = undefined;
    });
    //Users
    builder.addCase(fetchUsersAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
      state.usersList = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchUsersAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.usersList = undefined;
    });
    //Profile
    builder.addCase(fetchProfileAction.pending, (state, action) => {
      state.loading = true;
      state.profile = undefined;
    });
    builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
      state.profile = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(fetchProfileAction.rejected, (state, action) => {
      state.loading = false;

      state.profile = undefined;
      state.error = action.payload;
    });
  },
});

export default reposSlices.reducer;
