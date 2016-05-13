module.exports = function(app) {
    'use strict';
    
    app.component("layerDetails",{
       template: require('./layer-details.component.html'),
       bindings: {
           tri: '<',
           parent: '='
       },
       controllerAs: 'model'
   });   
}