
class FilterNameController {
  constructor () {
    this.open = true;
    this.name = '';
  }

  applyFilter() {
    if(this.name.length > 2){
    	this.onUpdate({
        $event: {
          type: 'NAME',
          name: this.name
        }
      });
    }
  }
}
export default FilterNameController
