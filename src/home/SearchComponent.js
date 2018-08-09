import React from 'react';
const SearchComponent = ({ tweets, loading, fetchTweetsJson }) => {
  console.log(tweets, loading, fetchTweetsJson);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {tweets.map((data, index) => (
        <li key={index}>
          <a
            href={`https://twitter.com/${data.user.screen_name}/status/${
              data.id_str
            }`}
            target="_blank"
          >
            {data.text}
          </a>
        </li>
      ))}
      <button onClick={() => fetchTweetsJson()}>Show Tweets</button>
    </ul>
  );
};
export default SearchComponent;
