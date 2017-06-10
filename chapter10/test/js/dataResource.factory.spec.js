(function(){
  describe('DataResourceFactory Test Suite', function(){

    describe('When DataResourceFactory is instantiated', function () {
      var mockDataResourceFactory;

      beforeEach(module('dataResource.factory'));

      beforeEach(inject(function ($injector) {
        mockDataResourceFactory = $injector.get('DataResourceFactory');
      }));

      it('it should be a resource for giphy search', function () {
        expect(mockDataResourceFactory.getGiphySearchResource).toEqual(jasmine.any(Function));
      });

    });
  });
})();
