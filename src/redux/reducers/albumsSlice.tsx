import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAlbum, getArtist, getTopAlbums } from "../../api/albums";
import { Album, AlbumRequest, Artist } from "../../api/albums/types";

export const fetchTopAlbums = createAsyncThunk("albums/topAlbums", async () => {
  try {
    const response = await getTopAlbums();
    return response.data;
  } catch (err) {
    console.warn("[AXIOS ERROR] fetching albums:", err);
  }
  return null;
});

export const fetchAlbum = createAsyncThunk(
  "albums/album",
  async (payload: { artist: string; album: string }) => {
    try {
      const response = await getAlbum(payload);
      return response.data;
    } catch (err) {
      console.warn("[AXIOS ERROR] fetching album:", err);
    }
    return null;
  }
);

export const fetchArtist = createAsyncThunk(
  "albums/artist",
  async (payload: { artist: string }) => {
    try {
      const response = await getArtist(payload);
      return response.data;
    } catch (err) {
      console.warn("[AXIOS ERROR] fetching artist:", err);
    }
    return null;
  }
);

interface InitialState {
  albums: AlbumRequest | null;
  album: Album | null;
  artist: Artist | null;
  queryStatuses: {
    fetchTopAlbums: boolean;
    fetchAlbum: boolean;
    fetchArtist: boolean;
  };
}

const initialState: InitialState = {
  albums: null,
  album: null,
  artist: null,
  queryStatuses: {
    fetchTopAlbums: false,
    fetchAlbum: false,
    fetchArtist: false,
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
      })
      .addCase(fetchAlbum.pending, (state) => {
        state.queryStatuses.fetchAlbum = true;
      })
      .addCase(fetchAlbum.rejected, (state) => {
        state.queryStatuses.fetchAlbum = false;
      })
      .addCase(fetchAlbum.fulfilled, (state, action) => {
        state.album = action.payload.album;
        state.queryStatuses.fetchAlbum = false;
      })
      .addCase(fetchArtist.pending, (state) => {
        state.queryStatuses.fetchArtist = true;
      })
      .addCase(fetchArtist.rejected, (state) => {
        state.queryStatuses.fetchArtist = false;
      })
      .addCase(fetchArtist.fulfilled, (state, action) => {
        state.artist = action.payload.artist;
        state.queryStatuses.fetchArtist = false;
      });
  },
});

export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectAlbum = (state: RootState) => state.albums.album;
export const selectArtist = (state: RootState) => state.albums.artist;
export const selectAlbumsQueryStatuses = (state: RootState) =>
  state.albums.queryStatuses;

export const {} = albumsSlice.actions;
