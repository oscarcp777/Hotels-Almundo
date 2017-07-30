/**
 * components/hotel/hotel-item/hotel-item.component.js
 *
 * Stateful Component that defines a hotel in a hotel list.
 * Stateful: - Fetches state, essentially communicating to a backend API through a service
 *           - In this example, the data is fetched in resolve routes and injected in 'data' property binding.
 */


export const HotelItemComponent = {
  bindings: {
    hotel: '<'
  },
  template: `
  <article data-ng-class="{'recommended' : $ctrl.hotel.recommended}" class="hotel-ctn am-ctn recommended">
    <div class="header-hotel col-md-4 col-xs-12">
      <div data-ng-if="$ctrl.hotel.recommended" class="offer">
        <p class="offer-text">¡Hotel recomendado!</p>
      </div>
      <div ng-style="{'background-image':'url({{$ctrl.hotel.image}})'}" class="hotel-image">
      </div>
    </div>

        <div class="col-md-5 col-xs-12">
          <div class="hotel-description">
            <a  class="link-hotel">
              <h1 title="Hotel Emperador" class="hotel-name">
                {{$ctrl.hotel.name}}
              </h1>
            </a>
            <p class="star-ctn">
            <stars num="$ctrl.hotel.stars"></stars>
            </p>
            <p class="meal-ctn">
                <span class="meal-description">
                  <i class="fa fa-bed" aria-hidden="true"></i>
                  solo la habitación
                </span>
              </p>
            <div class="amenities-ctn">
              <ul class="list">
                <li><i class="fa fa-glass" aria-hidden="true"></i>
                <li><i class="fa fa-users" aria-hidden="true"></i>
                <li><i class="fa fa-television" aria-hidden="true"></i>
                <li><i class="fa fa-wifi" aria-hidden="true"></i>
                <li><i class="fa fa-coffee" aria-hidden="true"></i></i>
                <li><i class="fa fa-check-square-o" aria-hidden="true"></i></i>
              </ul>
            </div>
            <div  class="rating-summary-ctn">
              <p class="rating-summary">
                <img width="80" ng-src="//static.almundo.com/img/logos/tripadvisor/4.0.svg"  alt="trip">
                <span class="quantity">2177<span>opiniones</span></span>
              </p>
            </div>
          </div>
        </div>

    <!--PRICEBOX-->
    <div  class="price-box-ctn col-md-3 col-xs-12">
      <div class="price-box">
        <div class="seal-disney">
          <img ng-src="/hotels/static/120/js/result/hotel/img/operadoroficial.png" />
        </div>
        <p class="price-description">Precio por noche por habitación</p>
        <p class="price--lg">
          <span class="price__currency">
            {{$ctrl.hotel.price.code}}
          </span>
          &nbsp;
          <span class="price__amount">{{$ctrl.hotel.price.amount | currency: '': 0}}</span>
          </p>
        <div>
          <span class="legal-taxes">Impuestos y tasas no incluidos</span>
        </div>
        <a class="btn btn-primary active btn-lg button-detail btn-block">
          Ver hotel
        </a>
        <p class="payment-methods"> Pagá en destino</p>
      </div>
    </div>

  </article>

  `
}
