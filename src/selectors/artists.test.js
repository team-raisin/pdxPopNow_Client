import { getArtists, getSearchArtist } from './artists';

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
});
