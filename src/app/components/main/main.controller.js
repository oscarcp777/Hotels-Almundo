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
    this.MainService.getHotels()
        .then(response => this.hotels = this.reducer(response,event))
  }

  reducer(state,action) {
    switch (action.type) {
      case 'STAR':
        this.$location.search({'STAR':action.values.toString()});
        return state.filter(hotel => action.values.includes(parseInt(hotel.stars)));
      case 'NAME':
        this.$location.search({'NAME':action.name});
        return state.filter(hotel => hotel.name.includes(action.name));
      case 'PRICE_RANGE':
        this.$location.search({'PRICE_RANGE':`${action.range.max}-${action.range.min}`});
        return state.filter(hotel => parseInt(action.range.min) <= parseInt(hotel.price.amount) &&  parseInt(hotel.price.amount)<= parseInt(action.range.max) );
      default:
        return state;
    }
  }
}
MainController.$inject = ['$stateParams', 'MainService','$location'];
export default MainController
