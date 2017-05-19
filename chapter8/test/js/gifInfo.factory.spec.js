(function() {
  describe('GifInfoFactory Test Suite', function() {

    describe('When GifInfoFactory is instantiated', function() {
      var mockGifInfoFactory;

      beforeEach(module('gifInfo.factory'));

      beforeEach(inject(function($injector) {
        mockGifInfoFactory = $injector.get('GifInfoFactory');
      }));

      describe('When createGifInfo is called', function() {
        it('it should exist', function() {
          expect(mockGifInfoFactory.createGifInfo).toEqual(jasmine.any(Function));
        });

        it('it should return {} when input is {}', function() {
          var input = {},
          result = mockGifInfoFactory.createGifInfo(input);
          expect(result).toEqual({});
        });
      });

    });
  });
})();
