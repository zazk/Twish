import React, { createContext, useState } from 'react';

export const TweetsContext = createContext({
  term: '',
  loading: false,
  tweets: [],
  test: '',
});

const TweetsProvider = ({ children }) => {
  const [tweets] = useState(['Gogogoog']);
  return (
    <TweetsContext.Provider value={{ tweets }}>
      {children}
    </TweetsContext.Provider>
  );
};

export default TweetsProvider;
