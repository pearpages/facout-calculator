module.exports = function(app) {
    'use strict';
    require('./facout-layer/facout-layer.component')(app);
    
    app.component("facoutCalculator",{
       template: require('./facout-calculator.component.html'),
       controllerAs: 'model',
       controller: function () {
           var model = this;
           
           model.tri = false;
           model.addLayer = addLayer;
           model.removeLayer = removeLayer;
           model.howMany = [1];  
           
           function addLayer() {
               model.howMany.push(model.howMany[model.howMany.length-1]+1);
           }
           
           function removeLayer() {
               if(model.howMany.length > 1) {
                    model.howMany.pop();                   
               }
           }
       }
   });   
}