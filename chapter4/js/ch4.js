'use strict'

var learnpodApp = angular.module('learnpodApp', []);

learnpodApp.controller('learnpodController', function($scope){
	$scope.title = "learnpod";
	$scope.count = 0;
	$scope.incrementCount = function(){
		$scope.count += 1; 
	};
	$scope.printCount = function(){
		console.log($scope.count);
	}
});