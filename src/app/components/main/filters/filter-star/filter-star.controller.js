
class FilterStarController {
  constructor () {
    this.open = true;
  }
  $onInit(){
    this.starsChecks = {
      '1':false,
      '2':false,
      '3':false,
      '4':false,
      '5':false,
      'all':false,
    }
  }

  applyFilter() {
    let  stars = [];
      Object.keys(this.starsChecks)
         .forEach( key => {
           if(this.starsChecks[key])
             stars.push(parseInt(key))
         });

      if(stars.length > 0){
        	this.onUpdate({
            $event: {
              type: "STAR",
              values:stars
            }
          });
    }
  }
}
export default FilterStarController
