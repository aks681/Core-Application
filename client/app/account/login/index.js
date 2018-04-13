'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('shaastraApp.login', [])
  .controller('LoginController', LoginController)
  .name;
