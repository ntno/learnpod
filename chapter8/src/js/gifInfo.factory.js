(function() {
  'use strict'
  angular.module('gifInfo.factory', [])
    .factory('GifInfoFactory', [function() {
      var createGifInfo = function(data) {
        return data;
      };
      return {
        createGifInfo : createGifInfo
      };
    }]);
})();
