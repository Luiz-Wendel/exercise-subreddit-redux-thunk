import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_ERROR,
} from '../actions';

const INITIAL_STATE = {
  isLoading: true,
  error: null,
  titlesList: [],
  subreddit: '',
};

const subredditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        subreddit: action.subreddit,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        titlesList: [...action.data],
      };
    case REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default subredditReducer;
