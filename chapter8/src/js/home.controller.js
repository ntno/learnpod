(function(){
'use strict'
//the controllers module contains the HomeController component and ContactController
angular.module('home.controller', ['dataResource.factory'])
	.controller('HomeController', ['$scope', 'DataResourceFactory', function($scope, DataResourceFactory){
		var homeScope = null;


		//Establish Scope
		$scope.homeScope = {
			data : {
				title : "learnpod home"
				,url : ""
				,imgUrl : ""
			}
			,userFunctions : {
			}
		};

		//Initialize
		homeScope = $scope.homeScope;

		DataResourceFactory.getGiphySearchResource().get(
			function(successfulResponse){
				console.log(successfulResponse);
				var giphyData = successfulResponse.data;

				homeScope.data.url = giphyData[0].url;
				homeScope.data.imgUrl = giphyData[0].images.fixed_height.url;
			},
			function(failedResponse){
				console.log(failedResponse);
			}
		);
	}]);
})();
