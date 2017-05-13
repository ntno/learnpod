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

      it('it should have phone set to "(123) 456-7890" on scope', function () {
        expect(mockContactControllerScope.contactScope.data.phone).toEqual('(123) 456-7890');
      });

      it('it should have email set to "ntno@github" on scope', function () {
        expect(mockContactControllerScope.contactScope.data.email).toEqual('ntno@github');
      });

      it('it should have title set to "contact us" on scope', function () {
        expect(mockContactControllerScope.contactScope.data.title).toEqual('contact us');
      });

      it('it should have user\'s email set to "" on scope', function () {
        expect(mockContactControllerScope.contactScope.userData.email).toEqual('');
      });

      describe('When submit is called', function(){
        it('should exist', function(){
          expect(mockContactControllerScope.contactScope.userFunctions.submit)
            .toEqual(jasmine.any(Function));
        });
      });

    });
  });
})();
