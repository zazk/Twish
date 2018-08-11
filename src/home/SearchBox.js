// Render Search Box
import React from 'react';
import SearchResults from './SearchResults';

const btnClasses =
  'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';

class SearchBox extends React.Component {
  state = {
    query: '#Mulesoft'
  };
  onInputChange = () => {
    this.setState({ query: this.search.value });
  };
  onSearchTerm = () => {
    this.props.action(this.search.value);
  };
  render() {
    return (
      <div>
        <form
          className="bar-actions"
          onSubmit={event => event.preventDefault()}
        >
          <p>
            Search
            <input
              className="mdl-textfield__input"
              defaultValue={this.state.query}
              onChange={this.onInputChange}
              ref={input => (this.search = input)}
            />
            in Twitter
          </p>
          <button
            type="submit"
            className={btnClasses}
            disabled={!this.state.query.length ? true : false}
            onClick={this.onSearchTerm}
          >
            Search Tweets
          </button>
        </form>
        {!this.props.loading ? (
          <SearchResults results={this.props.tweets} />
        ) : (
          <div className="bar-actions">Loading...</div>
        )}
      </div>
    );
  }
}
export default SearchBox;
