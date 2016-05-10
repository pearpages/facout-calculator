module.exports = function(app) {
    'use strict';
    
    app.component("layerDetails",{
       template: require('./layer-details.component.html'),
       bindings: {
           parent: '<'
       },
       controllerAs: 'model'
   });   
}