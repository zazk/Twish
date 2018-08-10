import React from 'react';
const btnClasses =
  'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
// Receive states and action dispatch function
const SearchComponent = ({ tweets, loading, fetchTweetsJson }) => {
  if (loading) {
    return <div className="bar-actions">Loading...</div>;
  }
  // print results
  // Search and validate results.
  return <SearchBox tweets={tweets} action={fetchTweetsJson} />;
};
// Render Search Box
const SearchBox = props => (
  <div>
    <div className="bar-actions">
      <button className={btnClasses} onClick={() => props.action()}>
        Search Tweets
      </button>
    </div>
    {props.tweets.length ? <SearchResults results={props.tweets} /> : ''}
  </div>
);
// Render Search Results
const SearchResults = props => (
  <div className="search-box">
    {props.results.map((data, index) => (
      <div className="search-item" key={index}>
        <a
          href={`https://twitter.com/${data.user.screen_name}/status/${
            data.id_str
          }`}
          target="_blank"
        >
          {data.text}
        </a>
      </div>
    ))}
  </div>
);

export default SearchComponent;
