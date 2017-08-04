import template from './pagination.template.html';

export const PaginationComponent = {
  bindings:{
    totalItems:'<',
    currentPage:'<',
    maxSize:'<'
  },
  template
}
