import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchTopAlbums = createAsyncThunk(
  "user/userProfile",
  async (_) => {
    try {
      const response = await fetchTopAlbums();
      return response;
    } catch (err) {
      console.warn(err);
    }
    return null;
  }
);

interface InitialState {
  albums: any;
  queryStatuses: {
    fetchTopAlbums: boolean;
  };
}

const initialState: InitialState = {
  albums: null,
  queryStatuses: {
    fetchTopAlbums: false,
  },
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTopAlbums.pending, (state) => {
        state.queryStatuses.fetchTopAlbums = true;
      })
      .addCase(fetchTopAlbums.rejected, (state) => {
        state.queryStatuses.fetchTopAlbums = false;
      })
      .addCase(fetchTopAlbums.fulfilled, (state, action) => {
        state.albums = action.payload;
        state.queryStatuses.fetchTopAlbums = false;
      });
  },
});

export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectAlbumsQueryStatuses = (state: RootState) =>
  state.albums.queryStatuses;

export const {} = albumsSlice.actions;
