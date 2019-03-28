export const getArtists = state => {
  return state.artists.artists;
};

export const getSearchArtist = state => {
  return state.artists.artistSearch;
};

export const getFilteredArtists = state => {
  const searchTerm = getSearchArtist(state);
  return getArtists(state).filter(artist => {
    return artist.genre.includes(searchTerm) || artist.artistName.includes(searchTerm);
  });
};

//Johnny needs to check if we still need this which we most likely dont
export const getEmail = state => {
  return state.artists.email;
};

