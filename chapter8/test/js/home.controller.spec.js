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

      it('it should have count set to 0', function () {
        expect(mockScope.data.count).toEqual(0);
      });

      describe('When incrementCount is called', function(){
        it('it should exist', function(){
          expect(mockScope.userFunctions.incrementCount)
            .toEqual(jasmine.any(Function));
        });

        it('it should add 1 to count', function(){
          var currentCount = mockScope.data.count;
          mockScope.userFunctions.incrementCount();
          expect(mockScope.data.count)
            .toEqual(currentCount + 1);
        });
      });

      describe('When printCount is called', function(){
        it('it should exist', function(){
          expect(mockScope.userFunctions.printCount)
            .toEqual(jasmine.any(Function));
        });

        it('it should print the current count to the console', function(){
          spyOn(console, 'log');
          mockScope.data.count = 6;
          var currentCount = mockScope.data.count;
          mockScope.userFunctions.printCount();
          expect(console.log).toHaveBeenCalledWith("homeScope.data.count", currentCount);
        });
      });

    });
  });
})();
