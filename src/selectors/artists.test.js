import { getArtists, getSearchArtist, getFilteredArtists } from './artists';

describe('artists selectors', () => {
  it('selects all artists', () => {
    const state = {
      artists: {
        artists: []
      }
    };
    const selectedArtists = getArtists(state);
    expect(selectedArtists).toEqual([]);
  });

  it('selects artist search', () => {
    const state = {
      artists: {
        artistSearch: ''
      }   
    };
    const searchedArtists = getSearchArtist(state);
    expect(searchedArtists).toEqual('');
  });

  it('filters artist search', () => {
    const state = {
      artists: {
        artists: [],
        artistSearch: ''
      }
    };
    
    const filteredArtist = getFilteredArtists(state);
    expect(filteredArtist).toEqual([]);
  });
});
