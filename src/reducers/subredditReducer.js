const INITIAL_STATE = {
  isLoading: true,
  titlesList: [],
};

const subredditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 1:
      return;
    default:
      return state;
  }
};

export default subredditReducer;
