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
			}
			,userFunctions : {
				incrementCount : incrementCount
				,printCount : printCount
			}
		};

		//Initialize
		homeScope = $scope.homeScope;
	}]);
})();
