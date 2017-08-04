import controller from './filter-name.controller'
import template from './filter-name.template.html'

export const FilterNameComponent = {
  bindings: {
    filters: '<',
    onUpdate:'&'
  },
  controller,
  template
}
