
import controller from './filters.controller'
import template from './filters.template.html';

export const FiltersComponent = {
  bindings: {
    onUpdate:'&'
  },
  controller,
  template
}
