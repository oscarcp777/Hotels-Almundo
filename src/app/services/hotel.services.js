import { filtersToString } from '../lib/url.search.params'
class HotelServices {
  constructor ($http,URL_API) {
    this.$http = $http;
    this.urlApi = URL_API;
  }

  fetchHotels (city,filters) {
    let filtersStr = filtersToString(filters,true);
    let url = `${this.urlApi}?${filtersStr}`;
    return this.$http
          .get(url)
          .then(response => response.data)
  }
}

HotelServices.$inject = ['$http','URL_API'];

export default HotelServices;
