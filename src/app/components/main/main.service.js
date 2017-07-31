/**
 * components/hotels/hotel.service.js
 *
 * Service to fetch data from hotels API
 */

class MainService {
  constructor ($http,$location,$stateParams,URL_API) {
    this.$http = $http;
    this.$location = $location;
    this.$stateParams = $stateParams;
    this.urlApi = URL_API;
  }

  getHotels () {
    let filters = this.$location.url().includes('?')?`?${this.$location.url().split('?')[0]}`:'';
    return this.$http.get(`${this.urlApi}/${this.$stateParams.city}${filters}`).then(response => response.data)
  }
}
MainService.$inject = ['$http','$location','$stateParams','URL_API'];

export default MainService
