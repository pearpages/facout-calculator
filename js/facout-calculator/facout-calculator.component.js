(function() {
   'use strict';

   angular.module('facoutCalculator')
   .component("facoutCalculator",{
       templateUrl: 'js/facout-calculator/facout-calculator.component.html',
       controllerAs: 'model',
       controller: function () {
           var model = this;
       }
   });
})();