import { filtersToString } from '../../lib/url.search.params';
class MainController {

  constructor($ngRedux, $scope,HotelActions,$stateParams,$location) {
    this.HotelActions = HotelActions;
    this.$location = $location;
    this.hotels = [];
    this.maxSize = 5;
    this.$stateParams=$stateParams
    function mapStateToParams(state) {
      console.log('State: ',state);
      return {
        hotels: state.hotels.results,
        pagination: state.hotels.pagination,
        filters : state.filters
      };
    }
    let disconnect = $ngRedux.connect(mapStateToParams, HotelActions)(this);

    $scope.$on('$destroy', disconnect); // Cleaning house
  }
  $onInit(){
    this.loadFiltersToUrl(this.$location.search());
    this.fetchHotels(this.$stateParams.city);
  }
  updateHotels(event) {
    this.applyFilter(event.action);
    this.fetchHotels(this.$stateParams.city);
    let params=filtersToString(this.filters,false);
    this.$location.url(`${this.$location.path()}?${params}`);
  }
};


MainController.$inject = ['$ngRedux', '$scope','HotelActions','$stateParams','$location'];
export default MainController
