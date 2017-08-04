
class FilterPriceController {
  constructor (HotelActions) {
    this.HotelActions= HotelActions;
    this.open = true;
  }
  $onChanges(changes) {
    	if (changes.filters) {
        this.filters = angular.copy(changes.filters.currentValue);
      }
  }
  applyFilter() {
    this.onUpdate({
      $event: {
        action:this.HotelActions.filterPriceRange(this.filters.price_range)
        }
    });

  }
}
FilterPriceController.$inject = ['HotelActions'];
export default FilterPriceController
