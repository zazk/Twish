import types from './types';

const INITIAL_STATE = {
  term: '',
  loading: false,
  tweets: []
};
const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_TWEETS_JSON: {
      return {
        ...state,
        loading: true
      };
    }

    case types.RECEIVE_TWEETS_JSON: {
      const { tweets } = action;
      return {
        ...state,
        tweets: tweets,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
