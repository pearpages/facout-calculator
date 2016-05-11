module.exports = function(app) {
    'use strict';
    
    app.component("quote",{
       template: require('./quote.component.html'),
       bindings: {
           parent: '<'
       },
       controllerAs: 'model',
       controller: ['$http',controller]
   });   
   
   function controller($http) {
           var model = this;
           
           model.quoteid;
           model.insuredName;
           model.lob;
           model.brokerName;
           model.uw;
           
           model.search = search;
           
           function search() {
               
            $http({
                method: 'GET',
                url: 'whatever'
                }).then(function successCallback(response) {
                    model.insuredName = response.data.retrieve.insuredName;
                    model.lob = response.data.retrieve.lob;
                    if(model.lob === 'TRI') {
                        model.parent.tri = true;
                    }
                    model.brokerName = response.data.relations.broker.name,
                    model.uw = response.data.underwriterId;
                }, function errorCallback(response) {
                    alert('The webservice is not available. Check the console.log');
                    console.log(response);
                });
           }   
       }
}