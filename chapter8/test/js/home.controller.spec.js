(function(){
  describe('HomeController Test Suite', function(){

    describe('When HomeController is instantiated', function () {
      var mockHomeControllerScope
      ,mockHomeController
      ,mockScope;

      beforeEach(module('home.controller'));

      beforeEach(inject(function ($rootScope, $controller) {
        mockHomeControllerScope = $rootScope.$new();
        mockHomeController = $controller('HomeController', {
            '$scope': mockHomeControllerScope
        });
        mockScope = mockHomeControllerScope.homeScope;
      }));

      it('it should have title set to "learnpod home"', function () {
        expect(mockScope.data.title).toEqual('learnpod home');
      });

    });
  });
})();
