(function(){
'use strict'
//the controllers module contains the HomeController component and ContactController
angular.module('home.controller', ['dataAccess.service'])
	.controller('HomeController', ['$scope', 'DataAccessService', function($scope, DataAccessService){
		var homeScope = null
		,incrementCount
		,printCount;

		incrementCount = function(){
			homeScope.data.count += 1;
		};
		printCount = function(){
			console.log("homeScope.data.count", homeScope.data.count);
		};

		//Establish Scope
		$scope.homeScope = {
			data : {
				title : "learnpod home"
				,count : 0
				,url : ""
				,imgUrl : ""
			}
			,userFunctions : {
				incrementCount : incrementCount
				,printCount : printCount
			}
		};

		//Initialize
		homeScope = $scope.homeScope;

		DataAccessService.getGiphySearchResource().get(
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
