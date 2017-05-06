(function(){
'use strict'
//the controllers module contains the ContactController component
angular.module('learnpod.controllers')
	.controller('ContactController', function($scope){
			$scope.title = "contact us";
			$scope.phone = "(123) 456-7890";
			$scope.email = "ntno@github"
		});
})();