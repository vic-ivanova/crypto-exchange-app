import { SEARCH_CHANGE_VALUE, SEARCH_RESET_VALUE } from '../types';

export const changeSearchValue = (payload, key) => ({
  type: SEARCH_CHANGE_VALUE,
  key,
  payload,
});

export const resetSearch = () => ({
  type: SEARCH_RESET_VALUE,
});
