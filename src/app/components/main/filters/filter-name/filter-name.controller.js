
class FilterNameController {
  constructor (HotelActions) {
    this.HotelActions= HotelActions;
    this.open = true;
    this.name = '';
  }

  applyFilter() {
    if(this.filters.name.length > 2){
      this.onUpdate({
        $event: {
          action:this.HotelActions.filterName(this.filters.name)
          }
      });
    }
  }
}
FilterNameController.$inject = ['HotelActions'];
export default FilterNameController
