
import controller from './filter-star.controller'

export const FilterStarComponent = {
  controller,
  template: `
  <uib-accordion>
    <div uib-accordion-group is-open="$ctrl.open">
        <uib-accordion-heading>
            <i class="fa fa-star" aria-hidden="true"></i>
            Estrellas
            <i class="pull-right fa" ng-class="{'fa-caret-down': $ctrl.open, 'fa-caret-up': !$ctrl.open}"></i>
        </uib-accordion-heading>
        <div class="list-star">
          <div class="checkbox">
            <label>
              <input type="checkbox" value=""/>
              Todas las Estrellas (10)
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value=""/>
              <stars num="5"></stars>
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value=""/>
              <stars num="4"></stars>
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value=""/>
              <stars num="3"></stars>
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value=""/>
              <stars num="2"></stars>
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value=""/>
              <stars num="1"></stars>
            </label>
          </div>
        </div>
    </div>
  </uib-accordion>
  `
}
