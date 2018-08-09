import types from './types';

const INITIAL_STATE = {
  term: '',
  loading: false,
  tweets: []
};
const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RECEIVE_TWEETS_JSON: {
      const { subreddit } = action;
      return {
        ...state,
        subreddit,
        tweets: [],
        loading: true
      };
    }

    case types.REQUEST_TWEETS_JSON: {
      const { tweets } = action;
      return {
        ...state,
        tweets,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
