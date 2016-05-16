(function() {
   'use strict';
   
   var angular = require('angular');
   require('./vendor/fcsaNumber.js');
   require('angular-local-storage');
   var app = angular.module('facoutCalculator',['fcsa-number','LocalStorageModule']);
   app.config(function (localStorageServiceProvider) {
       localStorageServiceProvider
       .setPrefix('fac-calculator');
   });
   
   require('./facout-calculator.component')(app);

})();