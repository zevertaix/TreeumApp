import api, { API_KEY } from "../api";

export const getTopAlbums = async () => {
  return await api.get(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=${API_KEY}&format=json`
  );
};
