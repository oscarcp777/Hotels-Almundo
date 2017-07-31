/**
 * components/hotel/filters/filters.component.js
 *
 * Stateful Component that defines a filters in a hotel list.
 * Stateful: - Fetches state, essentially communicating to a backend API through a service
 *           - In this example, the data is fetched in resolve routes and injected in 'data' property binding.
 */
import controller from './filters.controller'

export const FiltersComponent = {
  bindings: {
    onUpdate:'&'
  },
  controller,
  template: `
  <aside class="sidebar-nav filters visible-lg-block">
    <h5>Filtrar</h5>
    <filter-name on-update="$ctrl.updateHotels($event);"></filter-name>
    <filter-price filters="$ctrl.filters" on-update="$ctrl.updateHotels($event);"></filter-price>
    <filter-star filters="$ctrl.filters" on-update="$ctrl.updateHotels($event);"></filter-star>
  </aside>
  <aside class="sidebar-nav filters hidden-lg">
    <uib-accordion>
       <div uib-accordion-group class="filters-mobile" is-open="$ctrl.openSearch">
         <uib-accordion-heading>
           Modificar Busqueda
           <i class="fa" ng-class="{'fa-caret-up': $ctrl.openSearch, 'fa-caret-down': !$ctrl.openSearch}"></i>
         </uib-accordion-heading>
       </div>
       <div uib-accordion-group class="filters-mobile" is-open="$ctrl.map">
         <uib-accordion-heading>
           Ver Hoteles en en mapa
         </uib-accordion-heading>
       </div>
      <div uib-accordion-group class="filters-mobile" is-open="$ctrl.open">
        <uib-accordion-heading>
          Filtrar
          <i class="fa" ng-class="{'fa-caret-up': $ctrl.open, 'fa-caret-down': !$ctrl.open}"></i>
        </uib-accordion-heading>
          <filter-name on-update="$ctrl.updateHotels($event);"></filter-name>
          <filter-price filters="$ctrl.filters" on-update="$ctrl.updateHotels($event);"></filter-price>
          <filter-star filters="$ctrl.filters" on-update="$ctrl.updateHotels($event);"></filter-star>
      </div>
    </uib-accordion>
  </aside>
  `
}
