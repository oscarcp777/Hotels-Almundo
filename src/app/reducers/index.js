import * as redux from 'redux';
import hotels from './hotels';
import filters from './filters';

const reducers = redux.combineReducers({
  hotels,
  filters
});

export default reducers;
