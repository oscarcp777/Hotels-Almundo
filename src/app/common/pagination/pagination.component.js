import template from './pagination.template.html';
import controller from './pagination.controller';

export const PaginationComponent = {
  bindings:{
    totalItems:'<',
    maxSize:'<',
    onUpdate:'&'
  },
  controller,
  template
}
