(function(){
  describe('DataAccessService Test Suite', function(){

    describe('When DataAccessService is instantiated', function () {
      var mockDataAccessService;

      beforeEach(module('learnpod.services'));

      beforeEach(inject(function ($injector) {
        mockDataAccessService = $injector.get('DataAccessService');
      }));

      it('it should be a resource for giphy search', function () {
        expect(mockDataAccessService.getGiphySearchResource).toEqual(jasmine.any(Function));
      });

    });
  });
})();
