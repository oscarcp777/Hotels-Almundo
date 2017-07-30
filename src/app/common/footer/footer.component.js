/**
 * common/footer/footer.component.js
 *
 * A common component for the footer of application
 */

export const FooterComponent = {
  template: `
    <footer class="row am-footer">
      <div class="col-lg-12">
        <div class="fiscal">
        <a ng-href="https://servicios1.afip.gov.ar/clavefiscal/qr/response.aspx?qr=BmUO5NTInf0LRJJz70FaTQ" target="_self">
        <img ng-src="https://static.almundo.com/img/icon-afip.jpg"/>
         </a>
      </div>
        <div class="info">
          <p><span >
          <b>Asatej S.R.L. - Evt: Almundo.com - Leg: 8362 - Disp: 1350/93 - Cuit Nº 30-65951462-8</b> El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326. La Dirección Nacional de Protección de Datos de Personas, Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.</span></p>
        </div>
        </div>
    </footer>
  `
}
