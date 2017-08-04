
import controller from './filter-star.controller'
import template from './filter-star.template.html';

export const FilterStarComponent = {
  bindings: {
    filters: '<',
    onUpdate:'&'
  },
  controller,
  template
}
