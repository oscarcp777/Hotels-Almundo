import controller from './filter-price.controller'

export const FilterPriceComponent = {
  bindings: {
    filters: '<',
    onUpdate:'&'
  },
  controller,
  template: `
    <uib-accordion>
      <div uib-accordion-group  is-open="$ctrl.open">
        <uib-accordion-heading>
            <i class="fa fa-usd" aria-hidden="true"></i>
            Precio por noche
            <i class="pull-right fa" ng-class="{'fa-caret-up': $ctrl.open, 'fa-caret-down': !$ctrl.open}"></i>
        </uib-accordion-heading>
        <rzslider class="custom-slider"
                  ng-click="$ctrl.applyFilter()"
                  rz-slider-model="$ctrl.filters.range.min"
                  rz-slider-high="$ctrl.filters.range.max"
                  rz-slider-options="$ctrl.filters.range.options">
        </rzslider>

      </div>
  </uib-accordion>
  `
}
