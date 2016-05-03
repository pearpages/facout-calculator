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
                model.cedeFeePercentage = 0;
                // model.cedeFeeInAmount, computed value
                // model.cedeFee, computed value
           /* HCC Before Fac Out */
                model.beforeParticipationPercentage = 0;
                // model.beforeLimit, computed value
                // model.beforeGrossPremium, computed value
                model.beforeBrokerCommissionPercentage = 0;
                // model.beforeNetPremium, computed value
                model.beforeTaxes = 0;
           /* Reinsurer */
                model.reinsurerParticipationPercentage = 0;
                // model.reinsurerLimit, computed value
                // model.reinsurerGrossPremium, computed value
                // model.reinsurerBrokerCommissionPercentage, computed value
                // model.reinsurerNetPremium, computed value
                // model.reinsurerNetPremium, computed value
                // model.reinsurerTaxes = 'N/A';
           /* HCC After Fa Out */
                // model.afterParticipationPercentage, computed value
                // model.afterLimit, computed value
                // model.afterGrossPremium, computed value
                // model.afterBrokerCommissionPercentage, computed value
                // model.afterNetPremium, computed value
                // model.afterTaxes, computed value
           
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
           
           model.getAfterTaxes = getAfterTaxes;
           
           model.getAfterParticipationPercentage = getAfterParticipationPercentage;
           model.getReinsurerParticipationPercentage = getReinsurerParticipationPercentage;
           
           function getAfterTaxes() {
               return model.beforeTaxes;
           }
           
           function getReinsurerParticipationPercentage () {
               return model.reinsurerParticipationPercentage;
           }
           
           function getAfterBrokerCommissionPercentage() {
               return model.beforeBrokerCommissionPercentage;
           }
           
           function getReinsurerBrokerCommissionPercentage() {
               return model.beforeBrokerCommissionPercentage;
           }
           
           function getBeforeGrossPremium () {
               return model.layerPremium * (model.beforeParticipationPercentage/100);
           }
           
           function getAfterGrossPremium() {
               return getBeforeGrossPremium() - getReinsurerGrossPremium();
           }
           
           function getReinsurerGrossPremium() {
               return getBeforeGrossPremium() * (model.reinsurerParticipationPercentage/100);
           }
           
           function getBeforeParticipationPercentage() {
               return model.beforeParticipationPercentage;
           }
           
           function getAfterParticipationPercentage() {
               var aux = model.beforeParticipationPercentage * (model.reinsurerParticipationPercentage/100);
               return model.beforeParticipationPercentage - aux;
           }
           
           function getCedeFeeInAmount() {
               return model.getReinsurerNetPremium() * (model.cedeFeePercentage / 100);
           }
           
           function getCedeFee() {
               return getCedeFeeInAmount()/getReinsurerGrossPremium()*100;
           }
           
           function getBeforeLimit() {
               return model.layerLimit * (model.beforeParticipationPercentage/100);
           }
           
           function getAfterLimit() {
               return getBeforeLimit() - getReinsurerLimit();
           }
           
           function getReinsurerLimit() {
               return getBeforeLimit() * (getReinsurerParticipationPercentage()/100);
           }
           
           function getBeforeNetPremium() {
               return model.getBeforeGrossPremium() * (1 - (model.beforeBrokerCommissionPercentage/100));
           }
           
           function getAfterNetPremium() {
               return getBeforeNetPremium() - getReinsurerNetPremium();
           }
           
           function getReinsurerNetPremium() {
               return getReinsurerGrossPremium() * (1 - (getReinsurerBrokerCommissionPercentage()/100));
           }
       }
   });
})();