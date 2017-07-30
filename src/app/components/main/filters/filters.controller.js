
class FiltersController{
  constructor(){
    this.open=false;
  }
  $onInit(){
    this.filters = {
      nameHotel : '',
      pricesRange : {
        max : 150,
        min : 0
      },
      stars : 5
    };
  }
  updateHotels(event){
    console.log('updateHotels',event);
  }
}
export default FiltersController;
