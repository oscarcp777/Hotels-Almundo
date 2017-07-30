/**
 * components/hotels/hotels.component.js
 *
 * A common component for the footer of application
 */
import controller from './main.controller'

export const MainComponent = {
  controller,
  template: `
    <div class="container-fluid main">
      <search-widget></search-widget>
      <div class="row">
        <div class="col-lg-3 col-xs-12">
          <filters></filters>
        </div>
        <div class="col-lg-9 col-xs-12">
          <select-order disabled="$ctrl.hotels.length === 0"></select-order>
          <hotel-list list="$ctrl.hotels" ng-show="$ctrl.hotels.length > 0"></hotel-list>
          <pagination
            total-items="$ctrl.hotels.length"
            max-size="$ctrl.maxSize"
            current-page="$ctrl.currentPage">
          </pagination>
           <div class="alert alert-warning" role="alert" ng-show="$ctrl.hotels.length === 0">
             <h5>Lo sentimos. No encontramos disponibilidad para tu búsqueda</h5>
             Podés cambiar o borrar los filtros.
           </div>
        </div>
      </div>
    </div>
  `
}
