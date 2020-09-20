import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Home } from './home';
import TweetsProvider from './providers/tweets.provider';
// Setup router to Home Container
class App extends Component {
  render() {
    return (
      <TweetsProvider>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
          </div>
        </Router>
      </TweetsProvider>
    );
  }
}

export default App;
