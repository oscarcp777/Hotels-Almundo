import {FILTER_STAR,
        FILTER_NAME,
        FILTER_PRICE_RANGE,
        LOAD_HOTELS,
        LOAD_FILTERS_TO_URL,
        UPDATE_TO_URL
} from './types';

/** @ngInject */
export default function HotelActions(HotelServices) {

  function filterName(name) {
    return {type: FILTER_NAME, name}
  }
  function filterStar(values) {
    return {type: FILTER_STAR, values}
  }
  function filterPriceRange(price_range) {
    return {type: FILTER_PRICE_RANGE, price_range}
  }

  function loadHotels(results) {
    return {type: LOAD_HOTELS, results}
  }
  function loadFiltersToUrl(params) {
    return dispatch => {
      dispatch(updateToUrl(params));
    };
  }
  function updateToUrl(params) {
    return {type: UPDATE_TO_URL, params}
  }
  function applyFilter(actionFilter){
      return dispatch => {
        dispatch(actionFilter);
      };
  }
  function fetchHotels(city) {
    return (dispatch,getState )=> {
      let filters = getState().filters;
      HotelServices.fetchHotels(city,filters)
        .then(results => {
              dispatch(loadHotels(results));
      }
    )};
  }

  return {
    filterName,
    filterStar,
    filterPriceRange,
    loadHotels,
    fetchHotels,
    applyFilter,
    loadFiltersToUrl
  };
}
