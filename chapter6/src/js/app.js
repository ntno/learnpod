(function(){
'use strict'
angular.module('learnpod.controllers', []);
angular.module('learnpodApp', ['ngRoute', 'learnpod.controllers']);
angular.module('learnpodApp')
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