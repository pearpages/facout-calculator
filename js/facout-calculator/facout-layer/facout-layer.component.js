module.exports = function (app) {
    'use strict';
   require('./other-components/before-after-facout.component')(app);
   require('./other-components/cede-fees.component')(app);
   require('./other-components/layer-details.component')(app);
   
   app.component("facoutLayer",{
       template: require('./facout-layer.component.html'),
       bindings: {
           layer: "=",
           tri: "<",
           onDelete: "&"
       },
       controllerAs: 'model',
       controller: controller
   });
   
   function controller() {
       
           var model = this;
       
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
           
           //TRI
           model.getTriCedeFeeIncludingLegalFeesAndWht = getTriCedeFeeIncludingLegalFeesAndWht;
           model.getTriCedePremiumPassThru = getTriCedePremiumPassThru;
           model.getTriReinsurerPayment = getTriReinsurerPayment;
           model.getReinsurerWHT = getReinsurerWHT;
           model.getAfterWHT = getAfterWHT;
           model.getReinsurerAdminFee = getReinsurerAdminFee;
           model.getAfterAdminFee = getAfterAdminFee;
           
           function getTriCedeFeeIncludingLegalFeesAndWht() {
               return (model.layer.cedeFeePercentage/100 * (getReinsurerNetPremium() - getReinsurerWHT())) 
               + (getReinsurerWHT() + getReinsurerAdminFee());
           }
           
           function getTriCedePremiumPassThru() {
               return getReinsurerGrossPremium();
           }
           
           function getTriReinsurerPayment() {
               return getReinsurerNetPremium() - getTriCedeFeeIncludingLegalFeesAndWht();
           }
           
           function getReinsurerWHT() {
               return model.layer.beforeTriWht * getReinsurerParticipationPercentage()/100;
           }
           
           function getAfterWHT() {
               return model.layer.beforeTriWht;
           }
           
           function getReinsurerAdminFee() {
               return getReinsurerParticipationPercentage()/100 * model.layer.beforeTriAdminFee;
           }
           
           function getAfterAdminFee() {
               return model.layer.beforeTriAdminFee;
           }
           
           function getAfterTaxes() {
               return model.layer.beforeTaxes;
           }
           
           function getReinsurerParticipationPercentage () {
               return model.layer.reinsurerParticipationPercentage;
           }
           
           function getAfterBrokerCommissionPercentage() {
               return model.layer.beforeBrokerCommissionPercentage;
           }
           
           function getReinsurerBrokerCommissionPercentage() {
               return model.layer.beforeBrokerCommissionPercentage;
           }
           
           function getBeforeGrossPremium () {
               return model.layer.layerPremium * (model.layer.beforeParticipationPercentage/100);
           }
           
           function getAfterGrossPremium() {
               return getBeforeGrossPremium() - getReinsurerGrossPremium();
           }
           
           function getReinsurerGrossPremium() {
               return getBeforeGrossPremium() * (model.layer.reinsurerParticipationPercentage/100);
           }
           
           function getBeforeParticipationPercentage() {
               return model.layer.beforeParticipationPercentage;
           }
           
           function getAfterParticipationPercentage() {
               var aux = model.layer.beforeParticipationPercentage * (model.layer.reinsurerParticipationPercentage/100);
               return model.layer.beforeParticipationPercentage - aux;
           }
           
           function getCedeFeeInAmount() {
               return getReinsurerNetPremium() * (model.layer.cedeFeePercentage / 100);
           }
           
           function getCedeFee() {
               if(getReinsurerGrossPremium() === 0.0 ){
                   return 0;
               }
               return getCedeFeeInAmount()/getReinsurerGrossPremium()*100;
           }
           
           function getBeforeLimit() {
               return model.layer.layerLimit * (model.layer.beforeParticipationPercentage/100);
           }
           
           function getAfterLimit() {
               return getBeforeLimit() - getReinsurerLimit();
           }
           
           function getReinsurerLimit() {
               return getBeforeLimit() * (getReinsurerParticipationPercentage()/100);
           }
           
           function getBeforeNetPremium() {
               return getBeforeGrossPremium() * (1 - (model.layer.beforeBrokerCommissionPercentage/100));
           }
           
           function getAfterNetPremium() {
               return getBeforeNetPremium() - getReinsurerNetPremium();
           }
           
           function getReinsurerNetPremium() {
               return getBeforeNetPremium() * (getReinsurerParticipationPercentage()/100);
           }
   }
}