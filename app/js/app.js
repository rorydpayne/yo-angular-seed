'use strict';

angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'myApp.directives'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/holiday-builder', {templateUrl: 'partials/holiday-builder.html', controller: 'HolidayBuilderCtrl'});
		$routeProvider.otherwise({redirectTo: '/films'});
	}]);