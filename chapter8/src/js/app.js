(function(){
'use strict'
angular.module('learnpodApp', ['ngRoute', 'home.controller', 'contact.controller'])
	.config(function($routeProvider){
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
	});
})();
