(function(){
  describe('ContactController Test Suite', function(){

    describe('When ContactController is instantiated', function () {
      var mockContactControllerScope
      ,mockContactController;

      beforeEach(module('learnpodApp'));

      beforeEach(inject(function ($rootScope, $controller) {
        mockContactControllerScope = $rootScope.$new();
        mockContactController = $controller('ContactController', {
            '$scope': mockContactControllerScope
        });
      }));

      it('it should have email set to ntno@github on scope', function () {
        expect(mockContactControllerScope.contactScope.data.phone).toEqual('(123) 456-7890');
      });
    });
  });
})();
