/**
 * components/hotels/hotel.service.js
 *
 * Service to fetch data from hotels API
 */

class MainService {
  constructor ($http,$location,$stateParams) {
    this.$http = $http;
    this.$location = $location;
    this.$stateParams = $stateParams;
  }

  getHotels () {
    let filters = this.$location.url().includes('?')?`?${this.$location.url().split('?')[0]}`:'';
    return this.$http.get(`http://localhost:8081/api/hotels/${this.$stateParams.city}${filters}`).then(response => response.data)
  }
}
MainService.$inject = ['$http','$location','$stateParams'];

export default MainService
