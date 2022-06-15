import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import { exchangeReducer, selectedExchangeReducer } from './exchangeReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    exchange: exchangeReducer,
    selected: selectedExchangeReducer,
});

export default rootReducer;