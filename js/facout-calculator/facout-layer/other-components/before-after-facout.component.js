module.exports = function(app) {
    'use strict';
    
    app.component("beforeAfterFacout",{
       template: require('./before-after-facout.component.html'),
       bindings: {
           parent: '<'
       },
       controllerAs: 'model'
   });   
}