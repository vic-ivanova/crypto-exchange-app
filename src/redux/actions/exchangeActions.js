import { 
  PRICE_CHANGE_VALUE, 
  PRICE_RESET_VALUE, 
  SELECTED_EXCHANGE_CHANGE_VALUE, 
  SELECTED_EXCHANGE_RESET_VALUE, 
} from '../types';

// exchange price actions
export const changePriceInfo = (payload) => ({
  type: PRICE_CHANGE_VALUE,
  payload,
});

export const resetPriceInfo = () => ({
  type: PRICE_RESET_VALUE
});

// selected exchange actions
export const selectedExchange = (payload) => ({
  type: SELECTED_EXCHANGE_CHANGE_VALUE,
  payload,
});

export const resetSelectedExchange = () => ({
  type: SELECTED_EXCHANGE_RESET_VALUE
});