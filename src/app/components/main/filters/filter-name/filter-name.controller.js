
class FilterNameController {
  constructor () {
    this.open = true;
    this.name = '';
  }

  applyFilter() {
    	this.onUpdate({
        $event: {
          type: 'NAME',
          name: this.name 
        }
      });
  }
}
export default FilterNameController
