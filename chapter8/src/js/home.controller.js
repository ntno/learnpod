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
					console.log(giphyData);
					homeScope.data.gif.url = giphyData[0].url;
					homeScope.data.gif.imgUrl = giphyData[0].images.fixed_height.url;
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
			var idx = currentGifIdx%25;
			homeScope.data.gif.url = giphyData[idx].url;
			homeScope.data.gif.imgUrl = giphyData[idx].images.fixed_height.url;
		};


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
				nextGif : nextGif
			}
			,hasError : null
		};

		//Initialize
		homeScope = $scope.homeScope;
		getGifs();
	}]);
})();
