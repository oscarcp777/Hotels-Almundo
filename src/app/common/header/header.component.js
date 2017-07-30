/**
 * common/header/header.component.js
 *
 * A common component for the header of the application
 */

export const HeaderComponent = {
  template: `
        <div class="am-header">
          <nav class="navbar am-header">
              <div class="container-fluid">
                <div class="navbar-header">
                  <div class="navbar-toggle">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                  </div>
                  <div class="logo">
                     <a ng-href="/">
                       <img ng-src="https://images.almundo.com/205/image/upload/v1474984918/static/components/logo-almundo.svg" alt=""/>
                    </a>
                  </div>
                  <div class="login pull-right visible-lg-block">
                   <i class="fa fa-user-circle" aria-hidden="true"></i>
                   clubalmundo
                  </div>
                </div>

              </div>
            </nav>
            <div class="menu visible-lg-*">
                <ul class="nav navbar-nav">
                  <li class="active"><a href="https://almundo.com.ar/hoteles">Hoteles</a></li>
                  <li><a href="https://almundo.com.ar/vuelos">Vuelos</a></li>
                  <li><a href="https://almundo.com.ar/vuelo-hotel">Vuelos + Hotel</a></li>
                  <li><a href="https://almundo.com.ar/paquetes-turisticos">Paquetes</a></li>
                  <li><a href="https://almundo.com.ar/disney">Disney</a></li>
                  <li><a href="https://almundo.com.ar/promociones/escapadas">Escapadas</a></li>
                  <li><a href="https://almundo.com.ar/asistencia-al-viajero">Seguros</a></li>
                  <li><a href="https://almundo.com.ar/autos">Autos</a></li>
                  <li><a href="https://almundo.com.ar/promociones/cruceros">Cruceros</a></li>
                  <li><a href="https://almundo.com.ar/promociones/ofertas">OFERTAS</a></li>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mas <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="https://almundo.com.ar/pases-de-tren">Trenes</a></li>
                        <li><a href="https://almundo.com.ar/actividades">Actividades</a></li>
                      </ul>
                    </li>
            </ul>
            </div>
        </div>
 ` }
