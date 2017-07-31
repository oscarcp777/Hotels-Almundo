/**
 * components/hotels/main.controller.js
 *
 * Controller for <main> component
 */

class MainController {
  constructor($stateParams, MainService,$location) {
    this.$location = $location;
    this.$stateParams = $stateParams;
    this.hotels = [];
    this.MainService = MainService;
    this.loadData();
    this.currentPage = 1;
    this.maxSize = 5;
  }
  loadData() {
    this.MainService.getHotels()
      .then(response => this.hotels = response)
  }
  updateHotels(event) {
    console.log('MainController', event);
    this.hotels = this.reducer(event);
  }

  reducer(action) {
    switch (action.type) {
      case 'STAR':
        this.$location.search({'STAR':action.values.toString()});
        return this.hotels.filter(hotel => action.values.includes(parseInt(hotel.stars)));
      case 'NAME':
        this.$location.search({'NAME':action.name});
        return this.hotels.filter(hotel => hotel.name.includes(action.name));
      case 'PRICE_RANGE':
        this.$location.search({'PRICE_RANGE':`${action.range.max}-${action.range.min}`});
        return this.hotels.filter(hotel => parseInt(action.range.min) <= parseInt(hotel.price.amount) &&  parseInt(hotel.price.amount)<= parseInt(action.range.max) );
      default:
        return this.hotels;
    }
  }
}
MainController.$inject = ['$stateParams', 'MainService','$location'];
export default MainController
