
class FilterStarController {
  constructor (HotelActions,filters) {
    this.filters=filters;
    this.open = true;
    this.HotelActions= HotelActions;
  }
  $onInit(){
    let checks = {
      '1':false,
      '2':false,
      '3':false,
      '4':false,
      '5':false,
      'all':false,
    }
    let stars = this.filters.star.map(String);
    stars.forEach(star => checks[star] = true);
    this.starsChecks = checks;
  }

  applyFilter() {
    let  stars = [];
      Object.keys(this.starsChecks)
         .forEach( key => {
           if(this.starsChecks[key])
             stars.push(parseInt(key))
         });
        	this.onUpdate({
            $event: {
              action: this.HotelActions.filterStar(stars)
            }
          });
  }
}
FilterStarController.$inject = ['HotelActions'];
export default FilterStarController
