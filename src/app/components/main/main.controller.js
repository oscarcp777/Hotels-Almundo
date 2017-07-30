/**
 * components/hotels/main.controller.js
 *
 * Controller for <main> component
 */

class MainController {
  constructor ($stateParams,MainService) {
    this.$stateParams = $stateParams;
    this.hotels=[];
    this.MainService = MainService;
    this.loadData();
    this.currentPage = 1;
    this.maxSize = 5;
  }
  loadData(){
    this.MainService.getHotels()
      .then(response => this.hotels = response)
  }

}
MainController.$inject = ['$stateParams', 'MainService'];
export default MainController
