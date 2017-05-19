(function(){
'use strict'
//the controllers module contains the HomeController component and ContactController
angular.module('home.controller', ['dataResource.factory', 'gifInfo.factory'])
	.controller('HomeController', ['$scope', 'DataResourceFactory', 'GifInfoFactory', function($scope, DataResourceFactory, GifInfoFactory){
		var homeScope = null;


		//Establish Scope
		$scope.homeScope = {
			data : {
				title : "learnpod home"
				,gif : {
					url : ""
					,imgUrl : ""
				}
			}
			,userFunctions : {
			}
			,hasError : null
		};

		//Initialize
		homeScope = $scope.homeScope;

		DataResourceFactory.getGiphySearchResource().get(
			function(successfulResponse){
				var giphyData = successfulResponse.data;
				homeScope.data.gif.url = giphyData[0].url; 
				homeScope.data.gif.imgUrl = giphyData[0].images.fixed_height.url;
				homeScope.hasError = false;
			},
			function(failedResponse){
				homeScope.hasError = true;
			}
		);
	}]);
})();
