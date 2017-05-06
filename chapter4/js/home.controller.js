(function(){
'use strict'
//the controllers module contains the HomeController component and ContactController
angular.module('learnpod.controllers')
	.controller('HomeController', function($scope){
		$scope.title = "learnpod home";
		$scope.count = 0;
		$scope.incrementCount = function(){
			$scope.count += 1; 
		};
		$scope.printCount = function(){
			console.log($scope.count);
		}
	})
	
	.controller('ContactController', function($scope){
		$scope.title = "contact us";
		$scope.phone = "(123) 456-7890";
		$scope.email = "ntno@github"
	});

})();