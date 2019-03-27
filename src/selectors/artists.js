export const getArtists = state => {
  return state.artists.artists;
};

export const getSearchArtist = state => {
  return state.artists.artistSearch;
};

export const getFilteredArtists = state => {
  const searchTerm = getSearchArtist(state);
  return getArtists(state).filter(artist => {
    return artist.artistName.includes(searchTerm);
  });
};


//check to see if we still need this or not
export const getEmail = state => {
  return state.artists.email;
};


// export const getArtistArray = state => {
//   return state.artists.artists; 
// };


