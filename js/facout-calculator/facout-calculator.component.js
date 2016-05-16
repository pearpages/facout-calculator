module.exports = function(app) {
    'use strict';
    require('./facout-layer/facout-layer.component')(app);
    require('./quote-component/quote.component')(app);
    require('./models/layer.model')(app);
    
    app.component("facoutCalculator",{
       template: require('./facout-calculator.component.html'),
       controllerAs: 'model',
       controller: ['facOut','localStorageService',controller]
   });
   
   function controller(facOut,localStorageService) {
           var model = this;
           
           model.tri = false;
           model.layers = [];
           model.saving = false;
           model.loading = false;
           model.layersName;
           model.toLoad;
           model.existingLayers;
           model.saveLayers = saveLayers;
           model.addLayer = addLayer;
           model.removeLayer = removeLayer;
           model.loadExample = loadExample;
           model.loadLayers = loadLayers;
           model.deleteLayers = deleteLayers;
           model.printLayers = printLayers;
           
           model.$onInit = function () {
               loadLocalStorage();
               if(model.existingLayers.length > 0){
                   model.toLoad = "0";
               }
           }
           
           function printLayers() {
               var printContents = document.getElementById('facout-calculator').innerHTML;
                var popupWin = window.open('', '_blank');
                popupWin.document.open();
                popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
                popupWin.document.close();
           }
           
           function addLayer() {
               model.layers.push(new facOut());
           }
           
           function loadLocalStorage() {
               model.existingLayers = localStorageService.get('FAC-CALC-LAYERS') || [];
           }
           
           function loadLayers() {
               model.layers = model.existingLayers[model.toLoad].data.slice();
           }
           
           function deleteLayers() {
               var i = model.toLoad;
               console.log(i);
               model.existingLayers.splice(i,1);
               localStorageService.set('FAC-CALC-LAYERS', model.existingLayers);
               alert('removed');
           }
           
           function saveLayers() {
               model.existingLayers.push({name: model.layersName, data: model.layers});
               localStorageService.set('FAC-CALC-LAYERS', model.existingLayers);
               model.layersName = '';
               alert('saved');
           }
           
           function removeLayer() {
               if(model.layers.length > 0) {
                    model.layers.pop();                   
               }
           }
           
           function loadExample() {
               model.layers = [];
               model.layers.push(new facOut());
               
               model.layers[0].layerLimit = 30000000;
               model.layers[0].layerPremium =  375000;
               model.layers[0].underlyingLimit = 10000000;
               model.layers[0].cedeFeePercentage = 20.00;
               model.layers[0].beforeParticipationPercentage = 100;
               model.layers[0].reinsurerParticipationPercentage = 33.3333;
               model.layers[0].beforeBrokerCommissionPercentage = 17.5;
               model.layers[0].beforeTaxes = 5000;
               model.layers[0].beforeTriWht = 11250;
               model.layers[0].beforeTriAdminFee = 31209.53;
           }
       }   
}