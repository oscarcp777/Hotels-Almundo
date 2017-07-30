/**
 * components/hotels/hotel-list/hotel-list.component.js
 *
 * Stateless Component that defines a hotels list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */

export const HotelListComponent = {
  bindings: {
    list: '<'
  },
  template: `
      <div class="list-hotel">
        <hotel-item ng-repeat="hotel in $ctrl.list" hotel="hotel">
        </hotel-item>
      </div>
  `
}
