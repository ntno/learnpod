(function(){
'use strict'
//the controllers module contains the HomeController component and ContactController
angular.module('home.controller', ['dataResource.factory', 'gifInfo.factory'])
	.controller('HomeController', ['$scope', 'DataResourceFactory', 'GifInfoFactory', function($scope, DataResourceFactory, GifInfoFactory){
		var homeScope = null
		,giphyData = null
		,getGifs = function(){
			DataResourceFactory.getGiphySearchResource().get(
				function(successfulResponse){
					giphyData = successfulResponse.data;
					homeScope.data.gif = GifInfoFactory.createGifInfo(giphyData[0]);
					homeScope.hasError = false;
				},
				function(failedResponse){
					homeScope.hasError = true;
				}
			);
		}
		,currentGifIdx = 0
		,nextGif = function(){
			currentGifIdx++;
			var idx = currentGifIdx%(giphyData.length);
			homeScope.data.gif = GifInfoFactory.createGifInfo(giphyData[idx]);
		};


		//Establish Scope
		$scope.homeScope = {
			data : {
				title : "learnpod home"
				,gif : {
					sourceUrl : ""
					,fixed_height : {
						url : ""
						,height : ""
						,width : ""
					}
				}
			}
			,userFunctions : {
				nextGif : nextGif
			}
			,hasError : null
		};

		//Initialize
		homeScope = $scope.homeScope;
		getGifs();
	}]);
})();
