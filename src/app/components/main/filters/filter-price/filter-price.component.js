import controller from './filter-price.controller'
import template from './filter-price.template.html'

export const FilterPriceComponent = {
  bindings: {
    filters: '<',
    onUpdate:'&'
  },
  controller,
  template
}
