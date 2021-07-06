export const REQUEST = 'REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const request = (subreddit) => ({
  type: REQUEST,
  subreddit,
});

export const requestSuccess = (data) => ({
  type: REQUEST_SUCCESS,
  data,
});

export const requestError = (error) => ({
  type: REQUEST_ERROR,
  error,
});

export const fetchSubreddit = (subreddit) => {
  return (dispatch) => {
    dispatch(request(subreddit));

    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => response.json())
      .then((data) => dispatch(requestSuccess(data)))
      .catch((error) => dispatch(requestError(error)));
  };
};
