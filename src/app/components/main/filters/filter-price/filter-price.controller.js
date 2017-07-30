
class FilterPriceController {
  constructor () {
    this.open = true;
    this.slider = {
                  minValue: 20,
                  maxValue: 480,
                  options: {
                    floor: 0,
                    ceil: 500,
                    showTicks: true
                    }
                };
  }
  $onChanges(changes) {
    	if (changes.filters) {
        this.filters = angular.copy(changes.filters.currentValue);
      }
  }
  applyFilter() {
    	this.onUpdate({
        $event: {
          filters: this.filters
        }
      });
  }
}
export default FilterPriceController
