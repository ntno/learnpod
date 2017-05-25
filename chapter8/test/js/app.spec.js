(function(){
  describe('App Test Suite', function(){

    describe('When the learnpodApp module is created', function () {
      var moduleName = 'learnpodApp';

      beforeEach(module(moduleName));

      it('it should exist', function(){
        expect(angular.module(moduleName)).toEqual(jasmine.any(Object));
      });

      it('it should have 4 dependencies', function(){
        var dependencies = angular.module(moduleName).requires
        ,expectedDependencies = ['ngResource', 'ngRoute', 'home.controller', 'contact.controller'];
        expect(expectedDependencies.length).toEqual(4);
        expect(dependencies).toEqual(expectedDependencies);
      });

      describe('When the learnpodApp module is configured', function(){
          beforeEach(inject(function ($injector) {
            $route = $injector.get('$route');
          }));

          it('it should use the home template for the root route', function(){
            expect($route.routes['/'].templateUrl).toEqual('partials/home.tpl.html');
          });

          it('it should use the contact template for the contact route', function(){
            expect($route.routes['/contact'].templateUrl).toEqual('partials/contact.tpl.html');
          });
      });
    });
  });
})();
