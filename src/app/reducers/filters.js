import {FILTER_STAR,
        FILTER_NAME,
        FILTER_PRICE_RANGE,
        UPDATE_TO_URL,
        PAGINATE
      } from '../actions/types';
import {paramsToFilter} from '../lib/url.search.params'

const stateInitial ={
    name : '',
    star: [],
    limit : 20,
    offset: 0,
    price_range : {
              max : 5000,
              min : 50,
              change : false,
              options: {
                floor: 0,
                ceil: 8000
                }
            }
  };
export default(state = stateInitial, action = {}) => {
  switch (action.type) {
    case PAGINATE:
      return {...state,offset:(action.page-1)*state.limit}
    case FILTER_STAR:
      let newStars = action.values.slice();
      return {...state,offset: 0, star :newStars };
    case FILTER_PRICE_RANGE:
       let newRange = {};
       newRange.options = state.price_range.options
       newRange.change = true;
       newRange.min = action.price_range.min;
       newRange.max = action.price_range.max;
      return {...state,offset: 0, price_range:newRange};
    case FILTER_NAME:
      return {...state,offset: 0, name : action.name};
    case UPDATE_TO_URL:
       let newState = paramsToFilter( action.params,state);
       return newState;
    default:
      return state;
  }
}
