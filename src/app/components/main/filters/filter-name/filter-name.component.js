import controller from './filter-name.controller'

export const FilterNameComponent = {
  bindings: {
    filters: '<',
    onUpdate:'&'
  },
  controller,
  template: `
    <uib-accordion>
      <div uib-accordion-group  is-open="$ctrl.open">
           <uib-accordion-heading>
              <i class="fa fa-search" aria-hidden="true"></i>
              Nombre de Hotel
              <i class="pull-right fa" ng-class="{'fa-caret-up': $ctrl.open, 'fa-caret-down': !$ctrl.open}"></i>
           </uib-accordion-heading>
            <div class="form-inline">
              <div class="form-group">
                <div class="input-group">
                  <input ng-model="$ctrl.filters.nameHotel"  name="nameHotel" type="text" class="form-control" placeholder="Ingrese nombre de hotel">
                </div>
              </div>
              <button type="button"  ng-click="$ctrl.applyFilter()" class="btn btn-primary active btn-filter-name">Aceptar</button>
            </div>
      </div>
    </uib-accordion>
  `
}
