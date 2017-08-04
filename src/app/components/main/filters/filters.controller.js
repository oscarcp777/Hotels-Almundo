import { filtersToString } from '../../../lib/url.search.params';
class FiltersController{
  constructor($ngRedux, $scope,$location) {
    this.open=false;
    this.$location = $location;
    const mapStateToParams = (state) =>{
      console.log('State: ',state);
      return {
        filters: state.filters,
      };
    }
    let disconnect = $ngRedux.connect(mapStateToParams, null)(this);

    $scope.$on('$destroy', disconnect); // Cleaning house
  }

  updateHotels(event){
    this.onUpdate({
      $event: event
    });
    let params=filtersToString(this.filters,false);
    this.$location.url(`${this.$location.path()}?${params}`);
  }
}
FiltersController.$inject = ['$ngRedux', '$scope','$location'];

export default FiltersController;
