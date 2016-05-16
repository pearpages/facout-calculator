module.exports = function(app) {
    'use strict';
    
    app.component("quote",{
       template: require('./quote.component.html'),
       bindings: {
           parent: '='
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

            model.button = 'NO-TRI';

            model.toggleButton = toggleButton;
            model.reset = reset;
            model.search = search;
           
           function search() {
               
            $http({
                method: 'GET',
                url: 'http://hgbn-test01/infobase/1.1/api_protected_entity/retrieve?format=json&class=submission&id='+model.quoteid+'&relations%5B%5D=broker'
                }).then(function successCallback(response) {
                    model.insuredName = response.data.retrieve.insuredName;
                    model.lob = response.data.retrieve.lob;
                    if(model.lob.toLowerCase().match(/tri*/) === 'tri') {
                        model.parent.tri = true;
                    }
                    model.brokerName = response.data.retrieve.relations.broker.name;
                    model.uw = response.data.retrieve.underwriterId;
                }, function errorCallback(response) {
                    alert('The webservice is not available. Check the console.log');
                    console.log(response);
                });
           }

            function toggleButton() {
                if(model.button === 'NO-TRI'){
                    model.button = 'TRI';
                    model.parent.tri = true;
                }else{
                    model.button = 'NO-TRI';
                    model.parent.tri = false;
                }
            }

            function reset() {
                model.quoteid = undefined;
                model.insuredName = undefined;
                model.lob = undefined;
                model.brokerName = undefined;
                model.uw = undefined;
            }
       }
}