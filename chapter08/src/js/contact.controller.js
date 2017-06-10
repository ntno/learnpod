(function(){
'use strict'
//the controllers module contains the ContactController component
angular.module('contact.controller', [])
	.controller('ContactController', ['$scope', function($scope){
			var contactScope = null
			,submit = function(){
				contactScope.data.email = contactScope.userData.email;
				contactScope.userData.email = "";
			}

			//Establish Scope
			$scope.contactScope = {
				data : {
					title : "contact us"
					,phone : "(123) 456-7890"
					,email : "ntno@github"
				}
				,userData : {
					email : ""
				}
				,userFunctions : {
					submit : submit
				}
			};

			//Initialize
			contactScope = $scope.contactScope;
		}]);
})();
