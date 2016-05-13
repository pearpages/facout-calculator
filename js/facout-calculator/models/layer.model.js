module.exports = function (app) {
    'use strict';

    app.value('facOut', facOut);

    function facOut() {

        var model = this;

        model.beforeTriWht = 0;
        model.beforeTriAdminFee = 0;

        /* layer details */
        model.layerLimit = 0;
        model.layerPremium = 0;
        model.underlyingLimit = 0;
        /* cede fees */
        model.cedeFeePercentage = 0;
        // model.cedeFeeInAmount, computed value
        // model.cedeFee, computed value
        /*  Before Fac Out */
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
        /*  After Fa Out */
        // model.afterParticipationPercentage, computed value
        // model.afterLimit, computed value
        // model.afterGrossPremium, computed value
        // model.afterBrokerCommissionPercentage, computed value
        // model.afterNetPremium, computed value
        // model.afterTaxes, computed value
        
     }
}