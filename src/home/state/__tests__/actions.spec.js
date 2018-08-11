import actions from '../actions';
import types from '../types';
describe('actions', () => {
  it('should create an action to receive tweets', () => {
    const expectedAction = {
      type: types.RECEIVE_TWEETS_JSON,
      tweets: []
    };
    expect(actions.receiveTweetsJson([])).toEqual(expectedAction);
  });

  it('should create an action to request tweets', () => {
    const expectedAction = {
      type: types.REQUEST_TWEETS_JSON,
      tweets: []
    };
    expect(actions.requestTweetsJson()).toEqual(expectedAction);
  });
});
