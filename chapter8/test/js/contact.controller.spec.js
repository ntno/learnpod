(function(){
  describe('ContactController Test Suite', function(){

    describe('When contact.controller module is created', function(){
      var
      moduleName = 'contact.controller'
      ,componentName = "ContactController"
      ,mockContactControllerScope
      ,mockContactController
      ,mockScope;

      beforeEach(module(moduleName));

      it('it should exist', function(){
        expect(angular.module(moduleName)).toEqual(jasmine.any(Object));
      });

      it('it should have 0 dependencies', function(){
        var dependencies = angular.module(moduleName).requires
        ,expectedDependencies = [];
        expect(expectedDependencies.length).toEqual(0);
        expect(dependencies).toEqual(expectedDependencies);
      });

      describe('When ContactController is instantiated', function () {

        beforeEach(inject(function ($injector) {
          $rootScope = $injector.get('$rootScope');
          $controller = $injector.get('$controller');

          mockContactControllerScope = $rootScope.$new();
          mockContactController = $controller(componentName, {
              '$scope': mockContactControllerScope
          });
          mockScope = mockContactControllerScope.contactScope;
        }));


        it('it should have phone set to "(123) 456-7890" on scope', function () {
          expect(mockScope.data.phone).toEqual('(123) 456-7890');
        });

        it('it should have email set to "ntno@github" on scope', function () {
          expect(mockScope.data.email).toEqual('ntno@github');
        });

        it('it should have title set to "contact us" on scope', function () {
          expect(mockScope.data.title).toEqual('contact us');
        });

        it('it should have user\'s email set to "" on scope', function () {
          expect(mockScope.userData.email).toEqual('');
        });

        describe('When submit is called', function(){
          it('it should exist', function(){
            expect(mockScope.userFunctions.submit)
              .toEqual(jasmine.any(Function));
          });

          it('it should set data.email to userData.email', function(){
            var userEmail = "user@gmail"
            mockScope.userData.email = userEmail;
            mockScope.userFunctions.submit();
            expect(mockScope.data.email)
              .toEqual(userEmail);
          });

          it('it should reset userData.email to ""', function(){
            var userEmail = "user@gmail"
            mockScope.userData.email = userEmail;
            mockScope.userFunctions.submit();
            expect(mockScope.userData.email)
              .toEqual("");
          });
        });
      });
    });
  });
})();
