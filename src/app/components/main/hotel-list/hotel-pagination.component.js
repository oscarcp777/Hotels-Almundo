export const PaginationComponent = {
  bindings:{
    totalItems:'<',
    currentPage:'<',
    maxSize:'<'
  },
    template: `
      <ul uib-pagination
        total-items="$ctrl.totalItems"
        ng-model="$ctrl.currentPage"
        max-size="$ctrl.maxSize"
        class="pagination-sm"
        items-per-page="5"
        boundary-links="true"
        first-text="Inicio"
        last-text="Fin"
        previous-text="&laquo;"
        next-text="&raquo;" >
      </ul>
    `
}
