
class FiltersController{
  constructor(){
    this.open=false;
  }
  $onInit(){
    this.filters = {
      range : {
                max : 5000,
                min : 50,
                options: {
                  floor: 0,
                  ceil: 8000
                  }
              }
    };
  }
  updateHotels(event){
    this.onUpdate({
      $event: event
    });
    console.log('updateHotels',event);
  }
}
export default FiltersController;
