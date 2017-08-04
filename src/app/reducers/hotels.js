import {
  LOAD_HOTELS
} from '../actions/types';

export default(state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_HOTELS:
      return {
                  results : action.results.docs,
                  pagination : {
                    total:action.results.total,
                    limit:action.results.limit,
                    offset:action.results.offset
                  }
                };
    default:
      return state;
  }
}
