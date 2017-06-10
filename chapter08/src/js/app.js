(function(){
'use strict'
angular.module('learnpodApp', ['ngResource', 'ngRoute', 'home.controller', 'contact.controller'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'partials/home.tpl.html'
			})
			.when('/contact', {
				templateUrl : 'partials/contact.tpl.html'
			})
			.otherwise({
				redirectTo : '/'
			});
	}]);
})();
