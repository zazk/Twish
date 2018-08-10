import { connect } from 'react-redux';
import SearchComponent from './SearchComponent';
import { homeOperations } from './state';
// set props to send to component
const mapStateToProps = state => {
  const { tweets, loading } = state.home;
  return {
    tweets,
    loading
  };
};
// manage dispatch action
const mapDispatchToProps = dispatch => {
  const fetchTweetsJson = term => {
    dispatch(homeOperations.fetchTweetsJson(term));
  };
  return { fetchTweetsJson };
};
// Pass to Component states and dispatch actions
const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export default SearchContainer;
