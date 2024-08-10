export interface AlbumBrief {
  name: string;
  playcount: number;
  mbid: string;
  url: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image: {
    "#text": string;
    size: string;
  }[];
}

export interface AlbumRequest {
  topalbums: {
    album: AlbumBrief[];
  };
}

export interface Album {
  artist: string;
  mbid: string;
  tags: {
    tag: {
      url: string;
      name: string;
    }[];
  };
  playcount: string;
  image: {
    "#text": string;
    size: string;
  }[];
  tracks: {
    track: {
      streamable: {
        fulltrack: string;
        "#text": string;
      };
      duration: number;
      url: string;
      name: string;
      "@attr": {
        rank: 1;
      };
      artist: {
        name: string;
        mbid: string;
        url: string;
      };
    }[];
  };
  url: string;
  name: string;
  listeners: string;
  wiki: {
    published: string;
    summary: string;
    content: string;
  };
}

export interface Artist {
  name: string;
  mbid: string;
  url: string;
  image: {
    "#text": string;
    size: string;
  }[];
  streamable: string;
  ontour: string;
  stats: {
    listeners: string;
    playcount: string;
  };
  similar: {
    artist: {
      name: string;
      url: string;
      image: {
        "#text": string;
        size: string;
      }[];
    }[];
  };
  tags: {
    tag: {
      url: string;
      name: string;
    }[];
  };
  bio: {
    links: {
      link: {
        "#text": string;
        rel: string;
        href: string;
      };
    };
    published: string;
    summary: string;
    content: string;
  };
}
