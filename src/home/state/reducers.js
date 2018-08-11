import types from './types';
// Setup initial state.
const INITIAL_STATE = {
  term: '',
  loading: false,
  tweets: []
};
const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Manage loading state.
    case types.REQUEST_TWEETS_JSON: {
      return {
        ...state,
        tweets: [],
        term: action.term,
        loading: true
      };
    }
    // Manage results and reset loading state.
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
