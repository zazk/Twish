import actions from './actions';
import types from './types';

const requestTweetsJsonAction = actions.requestTweetsJson;
const receiveTweetsJsonAction = actions.receiveTweetsJson;

const fetchTweetsJson = subreddit => {
  return dispatch => {
    dispatch(requestTweetsJsonAction(subreddit));
    return fetch(types.API)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTweetsJsonAction(json.statuses));
      });
  };
};

export default {
  fetchTweetsJson
};
