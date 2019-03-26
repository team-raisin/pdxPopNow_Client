import { getArtists } from './artists';

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
});
