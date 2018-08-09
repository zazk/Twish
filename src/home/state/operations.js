import { requestTweetsJson, receiveTweetsJson } from './actions';
import types from './types';

const requestTweetsJsonAction = requestTweetsJson;
const receiveTweetsJsonAction = receiveTweetsJson;

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
