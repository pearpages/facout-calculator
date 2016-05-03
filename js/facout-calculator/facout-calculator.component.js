(function() {
   'use strict';

   angular.module('facoutCalculator')
   .component("facoutCalculator",{
       templateUrl: 'js/facout-calculator/facout-calculator.component.html',
       controllerAs: 'model',
       controller: function () {
           var model = this;
           
           model.lob = false;
           /* layer details */
           model.layerLimit = 0;
           model.layerPremium = 0;
           model.underlyingLimit = 0;
           /* cede fees */
           model.cededFeePercentage = 0;
           model.cedeFeeInAmount = 0;
           model.cedeFee = 0;
           /* HCC Before Fac Out */
           model.beforeParticipationPercentage = 0;
           model.beforeLimit = 0;
           model.beforeGrossPremium = 0;
           model.beforeBrokerCommissionPercentage = 0;
           model.beforeNetPremium = 0;
           model.beforeTaxes = 0;
           /* Reinsurer */
           model.reinsurerParticipationPercentage = 0;
           model.reinsurerLimit = 0;
           model.reinsurerGrossPremium = 0;
           model.reinsurerBrokerCommissionPercentage = 0;
           model.reinsurerNetPremium = 0;
           model.reinsurerNetPremium = 0;
           model.reinsurerTaxes = 'N/A';
           /* HCC After Fa Out */
           model.afterParticipationPercentage = 0;
           model.afterLimit = 0;
           model.afterGrossPremium = 0;
           model.afterBrokerCommissionPercentage = 0;
           model.afterNetPremium = 0;
           model.afterTaxes = 0;
           
           /* Interface */
           model.getCedeFeeInAmount = getCedeFeeInAmount;
           model.getCedeFee = getCedeFee;
           
           model.getBeforeLimit = getBeforeLimit;
           model.getAfterLimit = getAfterLimit;
           model.getReinsurerLimit = getReinsurerLimit;
           
           model.getAfterGrossPremium = getAfterGrossPremium;
           model.getBeforeGrossPremium = getBeforeGrossPremium;
           model.getReinsurerGrossPremium = getReinsurerGrossPremium;
           
           model.getBeforeNetPremium = getBeforeNetPremium;
           model.getAfterNetPremium = getAfterNetPremium;
           model.getReinsurerNetPremium = getReinsurerNetPremium;
           
           model.getReinsurerBrokerCommissionPercentage = getReinsurerBrokerCommissionPercentage;
           model.getAfterBrokerCommissionPercentage = getAfterBrokerCommissionPercentage;
           
           model.getReinsurerTaxes = getReinsurerTaxes;
           model.getAfterTaxes = getAfterTaxes;
           
           model.getAfterParticipationPercentage = getAfterParticipationPercentage;
           
           function getReinsurerTaxes() {
               return model.reinsurerTaxes;
           }
           
           function getAfterTaxes() {
               return model.afterTaxes;
           }
           
           function getAfterBrokerCommissionPercentage() {
               return model.afterBrokerCommissionPercentage;
           }
           
           function getReinsurerBrokerCommissionPercentage() {
               return model.reinsurerBrokerCommissionPercentage;
           }
           
           function getBeforeGrossPremium () {
               return model.beforeGrossPremium;
           }
           
           function getAfterGrossPremium() {
               return model.afterGrossPremium;
           }
           
           function getReinsurerGrossPremium() {
               return model.reinsurerGrossPremium;
           }
           
           function getAfterParticipationPercentage() {
               return model.afterParticipationPercentage;
           }
           
           function getCedeFeeInAmount() {
               return model.cedeFeeInAmount;
           }
           
           function getCedeFee() {
               return model.cedeFee;
           }
           
           function getBeforeLimit() {
               return model.beforeLimit;
           }
           
           function getAfterLimit() {
               return model.afterLimit;
           }
           
           function getReinsurerLimit() {
               return model.reinsurerLimit;
           }
           
           function getGrossPremium() {
               return model.grossPremium;
           }
           
           function getBeforeNetPremium() {
               return model.beforeNetPremium;
           }
           
           function getAfterNetPremium() {
               return model.afterNetPremium;
           }
           
           function getReinsurerNetPremium() {
               return model.reinsurerNetPremium;
           }
       }
   });
})();