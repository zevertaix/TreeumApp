import api, { API_KEY } from "../api";

export const fetchTopAlbums = async () => {
  return await api
    .get(`artist.gettopalbums&artist=cher&api_key=${API_KEY}&format=json`)
    .then((response) => response.data)
    .catch((err) => console.warn("[AXIOS ERROR] fetching albums:", err));
};
