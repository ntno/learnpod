(function(){
'use strict'
//the services module contains the DataAccessService component
angular.module('dataAccess.service', ['ngResource'])
	.factory('DataAccessService', ['$resource', function($resource){
		var getGiphySearchResource = function(){
			return $resource('http://api.giphy.com/v1/gifs/search?q=cute+puppy&api_key=dc6zaTOxFJmzC');
		};
		return {
			getGiphySearchResource : getGiphySearchResource
		};
	}]);
})();
