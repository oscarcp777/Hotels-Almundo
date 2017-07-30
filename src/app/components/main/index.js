/**
 * components/hotels/index.js
 *
 * Module that contains the hotels components and service
 * and configure the routed component for
 * / Hotels path route.
 */

import angular from 'angular'

import { HotelItemComponent } from './hotel-item/hotel-item.component'
import { HotelListComponent } from './hotel-list/hotel-list.component'
import { MainComponent } from './main.component'
import { SearchWidgetComponent } from './search-widget/search-widget.component'
import { SelectOrderComponent } from './hotel-list/select-order.component'
import { PaginationComponent } from './hotel-list/hotel-pagination.component'

import MainService from './main.service'
import filters from './filters'

const main = angular
  .module('app.main', [filters])
  .service('MainService', MainService)
  .component('main', MainComponent)
  .component('hotelItem', HotelItemComponent)
  .component('hotelList', HotelListComponent)
  .component('searchWidget', SearchWidgetComponent)
  .component('selectOrder', SelectOrderComponent)
  .component('pagination', PaginationComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main', {
        url: '/hotels/:city',
        component: 'main'
      });
    $urlRouterProvider.otherwise('/')
  })
  .name

export default main
