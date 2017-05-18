(function(){
'use strict'
//the services module contains the DataAccessService component
angular.module('dataAccess.service', ['ngResource'])
	.service('DataAccessService', ['$resource', function(){
		var getGiphySearchResource = function($resource){

		};
		return {
			getGiphySearchResource : getGiphySearchResource
		};
	}]);
})();
