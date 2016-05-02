var App = angular.module('starter', [
														'ui.router'
													]);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise("/");

		$stateProvider

			.state('app', {
				url: '/',
				templateUrl: './templates/index.html',
			})

			.state('aboutGavin', {
				url: '/about-Gavin',
				templateUrl: './templates/about/aboutGavin.html',
			})

			.state('aboutJennifer', {
				url:'/about-Jennifer',
				templateUrl: './templates/about/aboutJennifer.html'
			})

			.state('contact', {
				url: '/contact',
				templateUrl: './templates/contact.html'
			})

			.state('endorse', {
				url: '/endorse',
				templateUrl: './templates/endorse.html'
			})

			.state('get-involved', {
				url: '/get-involved',
				templateUrl: './templates/getInvolved.html'
			})

			.state('issues', {
				url: '/issues',
				templateUrl: './templates/issues.html'
			})

			.state('latest-news', {
				url: '/latest-news',
				templateUrl: './templates/latestNews.html'
			})

			.state('volunteer', {
				url: '/volunteer',
				templateUrl: './templates/volunteer.html'
			});

		// $locationProvider.html5Mode({
		// 	enabled: true,
		// 	requiredBase: false
		// });

	}]);