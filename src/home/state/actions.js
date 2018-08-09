import types from './types.js';

const requestTweetsJson = term => ({
  type: types.REQUEST_TWEETS_JSON,
  term: term,
  tweets: []
});
const receiveTweetsJson = json => ({
  type: types.RECEIVE_TWEETS_JSON,
  tweets: json
});

export { requestTweetsJson, receiveTweetsJson };
