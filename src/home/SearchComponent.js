import React, { useContext } from 'react';
import { TweetsContext } from '../providers/tweets.provider';
import SearchBox from './SearchBox';
// Receive states and action dispatch function
const SearchComponent = ({ tweets, loading, fetchTweetsJson }) => {
  const ctx = useContext(TweetsContext);
  console.log(
    ctx,
    ctx.tweets !== null ? 'Successfull. Context Ready' : 'No Connected'
  );
  // print results
  // Search and validate results.
  return (
    <div>
      <SearchBox tweets={tweets} action={fetchTweetsJson} loading={loading} />
    </div>
  );
};
export default SearchComponent;
