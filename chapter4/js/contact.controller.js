(function(){
'use strict'
//the controllers module contains the ContactController component
angular.module('learnpod.controllers')
	.controller('ContactController', function($scope){
			var contactScope = null;
			
			//Establish Scope
			$scope.contactScope = {
				data : {
					title : "contact us"
					,phone : "(123) 456-7890"
					,email : "ntno@github"
				}
			};
	
			//Initialize
			contactScope = $scope.contactScope;
		});
})();