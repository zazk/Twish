import { connect } from 'react-redux';
import SearchComponent from './SearchComponent';
import { homeOperations } from './state';

const mapStateToProps = state => {
  const { tweets, loading } = state.home;
  return {
    tweets,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  const fetchTweetsJson = term => {
    dispatch(homeOperations.fetchTweetsJson(term));
  };
  return { fetchTweetsJson };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export default SearchContainer;
