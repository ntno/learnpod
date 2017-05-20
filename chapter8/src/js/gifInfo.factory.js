(function() {
  'use strict'
  angular.module('gifInfo.factory', [])
    .factory('GifInfoFactory', [function() {
      var createGifInfo = function(data) {
        var learnpodGifData = {}
        ,giphyFixedHeight;

        if(data !== undefined && data !== null && data.images !== undefined){
          giphyFixedHeight = data.images.fixed_height;
          learnpodGifData.sourceUrl = data.url;
          learnpodGifData.fixed_height = {};
          learnpodGifData.fixed_height.url = giphyFixedHeight.url;
          learnpodGifData.fixed_height.height = giphyFixedHeight.height;
          learnpodGifData.fixed_height.width = giphyFixedHeight.width;
        }

        return learnpodGifData;
      };
      return {
        createGifInfo : createGifInfo
      };
    }]);
})();
