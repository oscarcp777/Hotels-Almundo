class PaginationController {
  constructor(HotelActions) {
    this.HotelActions = HotelActions;
    this.currentPage = 1;
  }
  applyFilter() {
    this.onUpdate({
      $event: {
        action: this.HotelActions.paginate(this.currentPage)
      }
    });
  }
}
PaginationController.$inject = ['HotelActions'];
export default PaginationController;
