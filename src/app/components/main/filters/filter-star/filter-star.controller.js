
class FilterStarController {
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
          filters: this.filters
        }
      });
  }
}
export default FilterStarController
