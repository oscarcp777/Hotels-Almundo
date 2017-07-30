/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular'

import main from './main'

const components = angular
  .module('app.components', [main])
  .name

export default components
