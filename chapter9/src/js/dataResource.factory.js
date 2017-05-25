(function(){
'use strict'
angular.module('dataResource.factory', ['ngResource'])
	.factory('DataResourceFactory', ['$resource', function($resource){
		var getGiphySearchResource = function(){
			return $resource('http://api.giphy.com/v1/gifs/search?q=cute+puppy&api_key=dc6zaTOxFJmzC');
		};
		return {
			getGiphySearchResource : getGiphySearchResource
		};
	}]);
})();
