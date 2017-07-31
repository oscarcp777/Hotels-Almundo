
class FilterPriceController {
  constructor () {
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
          type:'PRICE_RANGE',
          range: this.filters.range
        }
      });
  }
}
export default FilterPriceController
