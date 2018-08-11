import React from 'react';

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
export default SearchResults;
