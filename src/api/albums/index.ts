import api, { API_KEY } from "../api";

export const getTopAlbums = async () => {
  return await api.get(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=${API_KEY}&format=json`
  );
};

export const getAlbum = async ({
  artist,
  album,
}: {
  artist: string;
  album: string;
}) => {
  return await api.get(
    `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=${artist}&album=${album}&format=json`
  );
};

export const getArtist = async ({ artist }: { artist: string }) => {
  return await api.get(
    `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`
  );
};
