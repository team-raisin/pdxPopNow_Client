export const getArtists = state => {
  console.log(state, 'state!!');
  return state.artists.artists;
};

export const getSearchArtist = state => {
  // don't lowercase here
  return state.artists.artistSearch.toLowerCase();
};

export const getFilteredArtists = state => {
  const searchTerm = getSearchArtist(state).toLowerCase();
  return getArtists(state).filter(artist => {
    return artist.genre[0].toLowerCase() === searchTerm || artist.artistName.toLowerCase().includes(searchTerm);
  });
};

//Johnny needs to check if we still need this which we most likely dont
export const getEmail = state => {
  return state.artists.email;
};
