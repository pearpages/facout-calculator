module.exports = function(app) {
    'use strict';
    
    app.component("cedeFees",{
       template: require('./cede-fees.component.html'),
       bindings: {
           parent: '<'
       },
       controllerAs: 'model'
   });   
}