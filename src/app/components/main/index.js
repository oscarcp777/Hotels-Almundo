/**
 * components/hotels/index.js
 *
 * Module that contains the hotels components and service
 * and configure the routed component for
 * / Hotels path route.
 */

import angular from 'angular'

import { HotelItemComponent } from './hotels/hotel-item/hotel-item.component'
import { HotelsComponent } from './hotels/hotels.component'
import { MainComponent } from './main.component'
import { SearchWidgetComponent } from './search-widget/search-widget.component'
import { SelectOrderComponent } from './hotels/select-order/select-order.component'

import filters from './filters'
import HotelActions from '../../actions/hotel.actions'
import HotelServices from '../../services/hotel.services';

const main = angular
  .module('app.main', [filters])
  //.constant('URL_API','http://ec2-13-58-208-162.us-east-2.compute.amazonaws.com:8081/api/hotels')
  .constant('URL_API','http://localhost:8081/api/hotels')
  .factory('HotelActions', HotelActions)
  .service('HotelServices', HotelServices)
  .component('main', MainComponent)
  .component('hotelItem', HotelItemComponent)
  .component('hotelList', HotelsComponent)
  .component('searchWidget', SearchWidgetComponent)
  .component('selectOrder', SelectOrderComponent)
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
