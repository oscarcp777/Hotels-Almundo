
class FiltersController{
  constructor($ngRedux, $scope) {
    this.open=false;
    const mapStateToParams = (state) =>{
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

  }
}
FiltersController.$inject = ['$ngRedux', '$scope'];

export default FiltersController;
