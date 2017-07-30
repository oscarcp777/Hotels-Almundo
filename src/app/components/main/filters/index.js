import angular from 'angular'
import {FiltersComponent} from './filters.component'
import {FilterNameComponent} from './filter-name/filter-name.component'
import {FilterPriceComponent} from './filter-price/filter-price.component'
import {FilterStarComponent} from './filter-star/filter-star.component'

const filters = angular
  .module('app.filters', [])
  .component('filters', FiltersComponent)
  .component('filterName', FilterNameComponent)
  .component('filterPrice', FilterPriceComponent)
  .component('filterStar', FilterStarComponent)
  .name
  export default filters
