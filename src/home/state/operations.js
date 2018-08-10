import actions from './actions';
import types from './types';

const requestTweetsJsonAction = actions.requestTweetsJson;
const receiveTweetsJsonAction = actions.receiveTweetsJson;
// Setup dispatch actions
const fetchTweetsJson = () => {
  return dispatch => {
    // Dispatch action request
    dispatch(requestTweetsJsonAction());
    return fetch(types.API)
      .then(response => response.json())
      .then(json => {
        // dispatch action when finish the fetch and send the results
        dispatch(receiveTweetsJsonAction(json.statuses));
      });
  };
};

export default {
  fetchTweetsJson
};
