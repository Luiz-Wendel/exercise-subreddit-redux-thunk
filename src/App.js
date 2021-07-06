import React from "react";
import { connect } from "react-redux";
import TitlesList from "./components/TitlesList";
import { fetchSubreddit } from './actions';

class App extends React.Component {
  render() {
    const { titles, subreddit, loading, error, fetchPosts } = this.props;

    const loadingElement = <span>Loading...</span>;

    return (
      <main>
        <h1>Selected: {subreddit}</h1>
  
        <select value="frontend" onChange={ ({ target }) => fetchPosts(target.value) }>
          <option value="frontend">frontend</option>
          <option value="reactjs">reactjs</option>
        </select>

        <br />
  
        <span>Las updated at { Date.now() }</span>
        <input type="button" value="Refresh" onClick={ () => fetchPosts(subreddit) } />

        <br />

        {
          loading
          ? loadingElement
          : <TitlesList titles={ titles } error={ error } />
        }
      </main>
    );
  }
}

const mapStateToProps = ({ subredditReducer }) => ({
  titles: subredditReducer.titlesList,
  subreddit: subredditReducer.subreddit,
  loading: subredditReducer.isLoading,
  error: subredditReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (subreddit) => dispatch(fetchSubreddit(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
