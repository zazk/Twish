import { requestTweetsJson, receiveTweetsJson } from './actions';
import { API } from './types';

const requestTweetsJsonAction = requestTweetsJson;
const receiveTweetsJsonAction = receiveTweetsJson;

const fetchTweetsJson = subreddit => {
  return dispatch => {
    dispatch(requestTweetsJsonAction(subreddit));
    return fetch(API)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTweetsJsonAction(json));
      });
  };
};

export default {
  fetchTweetsJson
};
