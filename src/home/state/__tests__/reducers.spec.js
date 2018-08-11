import homeReducer from '../reducers';
import types from '../types';

describe('home reducer', () => {
  const INITIAL_STATE = {
    term: '',
    loading: false,
    tweets: []
  };
  it('should return the initial state', () => {
    expect(homeReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle REQUEST_TWEETS_JSON', () => {
    expect(
      homeReducer([], {
        type: types.REQUEST_TWEETS_JSON,
        term: '#Mulesoft'
      })
    ).toEqual({
      term: '#Mulesoft',
      loading: true,
      tweets: []
    });
  });
});
