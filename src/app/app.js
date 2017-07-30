/**
 * app.js
 *
 * Root modulethat imports all modules of the app.
 */

import angular from 'angular'
import uiRouter from '@uirouter/angularjs';
import uiBootstrap from 'angular-ui-bootstrap';
import { AppComponent } from './app.component'
import common from './common/common'
import components from './components/components'
import  rzModule  from 'angularjs-slider';

const root = angular
  .module('hotelsAlmundo', [
    uiRouter,
    uiBootstrap,
    common,
    components,
    rzModule
  ])
  .component('hotelsApp', AppComponent)

// Bootstrap the app.
document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['hotelsAlmundo']))

export default root
