import actions from './actions';
import types from './types';

// Setup dispatch actions
const fetchTweetsJson = term => {
  return dispatch => {
    // Dispatch action request
    dispatch(actions.requestTweetsJson(term));
    return fetch(`${types.API}${encodeURIComponent(term)}`)
      .then(response => response.json())
      .then(json => {
        const items = json.statuses ? json.statuses : [];
        // dispatch action when finish the fetch and send the results
        dispatch(actions.receiveTweetsJson(items));
      });
  };
};

export default {
  fetchTweetsJson
};
