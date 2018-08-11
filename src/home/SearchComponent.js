import React from 'react';
import SearchBox from './SearchBox';
// Receive states and action dispatch function
const SearchComponent = ({ tweets, loading, fetchTweetsJson }) => {
  // print results
  // Search and validate results.
  return (
    <div>
      <SearchBox tweets={tweets} action={fetchTweetsJson} loading={loading} />
    </div>
  );
};
export default SearchComponent;
