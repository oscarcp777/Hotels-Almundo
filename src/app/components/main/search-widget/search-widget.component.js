/**
 * common/footer/footer.component.js
 *
 * A common component for the footer of application
 */

export const SearchWidgetComponent = {
  template: `
    <div class="">
        <div class="row visible-lg-block">
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Hoteles</a></li>
            <li class="active">Madrid</li>
          </ol>
        </div>
        <div class="row visible-lg-block">
          <div class="search-widget">
            <p>Hoteles disponibles para:</p>
            <ul class="list-inline">
              <li><i class="fa fa-map-marker" ></i> Madrid </li>
              <li><i class="fa fa-calendar" ></i> 20/07/2017 </li>
              <li><i class="fa fa-calendar" ></i> 30/07/2017 </li>
              <li><i class="fa fa-user"></i> 2 huéspedes </li>
              <li><a> Modificar búsqueda </a></li>
            </ul>
          </div>
        </div>
    </div>
  `
}
