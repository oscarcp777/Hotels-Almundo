export const SelectOrderComponent = {
  bindings:{
    disabled:'@'
  },
    template: `
        <div class="row" ng-show="$ctrl.disabled">
          <div class="col-md-12 col-xs-12">
             <div class="view-map visible-lg-block">
              <div ng-show="!$ctrl.mapOpen" class="link">
                <i class="fa fa-map-marker"></i>
                <span class="text">
                Ver hoteles en mapa
                </span>
              </div>
            </div>
            <div class="form-inline select-order">
              <label>Ordenar</label>
              <select class="form-control"  >
                <option>Mas relevantes</option>
                <option>Precio mas bajo</option>
                <option>Precio mas alto</option>
                <option>Menos estrellas</option>
                <option>Mas estrellas</option>
              </select>
            </div>
          </div>
      </div>
      `
  }
