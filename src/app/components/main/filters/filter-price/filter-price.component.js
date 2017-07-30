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
        <rzslider class="custom-slider" ng-click="$ctrl.applyFilter()"
                  rz-slider-model="$ctrl.slider.minValue"
                  rz-slider-high="$ctrl.slider.maxValue"
                  rz-slider-options="$ctrl.slider.options">
        </rzslider>

      </div>
  </uib-accordion>
  `
}
