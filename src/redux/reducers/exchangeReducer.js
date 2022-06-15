import { 
  PRICE_CHANGE_VALUE, 
  PRICE_RESET_VALUE, 
  SELECTED_EXCHANGE_CHANGE_VALUE, 
  SELECTED_EXCHANGE_RESET_VALUE, 
} from '../types';

// exchange price
export const exchangeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case PRICE_CHANGE_VALUE:
      return [...payload ];
    case PRICE_RESET_VALUE:
      return state;
    default:
      return state;
  }
};

// selected exchange
export const selectedExchangeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_EXCHANGE_CHANGE_VALUE:
      return { ...payload };
    case SELECTED_EXCHANGE_RESET_VALUE:
      return state;
    default:
      return state;
  }
}