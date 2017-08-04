/**
 * common/common.js
 *
 * Module that contains the common components for the application.
 */

import angular from 'angular'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StarComponent } from './stars/star.component';
import { PaginationComponent } from './pagination/pagination.component';

const common = angular
  .module('app.common', [])
  .component('haHeader', HeaderComponent)
  .component('haFooter', FooterComponent)
  .component('stars', StarComponent)
  .component('pagination', PaginationComponent)
  .name

export default common
