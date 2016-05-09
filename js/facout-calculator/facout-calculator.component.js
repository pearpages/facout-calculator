(function() {
   'use strict';

   angular.module('facoutCalculator')
   .component("facoutCalculator",{
       templateUrl: 'js/facout-calculator/facout-calculator.component.html',
       controllerAs: 'model',
       controller: function () {
           var model = this;
           
           model.tri = false;
           model.howMany = [1,2,3,4,5];  
       }
   });
})();