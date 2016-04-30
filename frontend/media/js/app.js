var App = angular.module('starter', [
														'index.controller',
														'ui.router'
													]);

App.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app');

		$stateProvider

			.state('app', {
				url: '/',
				templateUrl: './templates/index.html',
				// controller: 'IndexCtrl'
			})

			.state('aboutGavin', {
				url: 'about-gavin',
				templateUrl: './templates/about/aboutGavin.html',
			})

			.state('aboutJennifer', {
				url:'aboutJennifer',
				templateUrl: './templates/about/aboutJennifer.html'
			})

			.state('contact', {
				url: 'contact',
				templateUrl: './templates/contact.html'
			})

			.state('donate', {
				url: 'donate',
				templateUrl: './templates/donate.html'
			})

			.state('endorse', {
				url: 'endorse',
				templateUrl: './templates/endorse.html'
			})

			.state('facebook', {
				url: 'facebook',
				templateUrl: './templates/facebook'
			})

			.state('get-involved', {
				url: 'get-involved',
				templateUrl: './templates/get-involved'
			})

			.state('issues', {
				url: 'issues',
				templateUrl: './templates/issues'
			})

			.state('latest-news', {
				url: 'latest-news',
				templateUrl: './templates/latest-news'
			})

			.state('volunteer', {
				url: 'volunteer',
				templateUrl: './templates/volunteer'
			});

		// $locationProvider.html5Mode({
		// 	enabled: true,
		// 	requiredBase: false
		// });


	}]);