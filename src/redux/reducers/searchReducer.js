import { SEARCH_CHANGE_VALUE, SEARCH_RESET_VALUE } from '../types';

const initialState = [{
  pair: ''
}];

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHANGE_VALUE:
      return [{ ...action.payload }];
    case SEARCH_RESET_VALUE:
      return initialState;
    default:
      return state;
  }
};

export default searchReducer;