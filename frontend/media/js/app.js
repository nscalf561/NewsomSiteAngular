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

			.state('economy', {
				url: '/issues/economy',
				templateUrl: './templates/issues/economy.html'
			})

			.state('energy', {
				url: '/issues/energy',
				templateUrl: './templates/issues/energy.html'
			})

			.state('civilRights', {
				url: '/issues/civil-rights', 
				templateUrl: './templates/issues/civilRights.html'
			})

			.state('schools', {
				url: '/issues/schools',
				templateUrl: './templates/issues/schools.html'
			})

			.state('drugPolicy', {
				url: '/issues/drug-policy', 
				templateUrl: './templates/issues/drugPolicy.html'
			})

			.state('government', {
				url: '/issues/government', 
				templateUrl: './templates/issues/government.html'
			})

			.state('latest-news', {
				url: '/latest-news',
				templateUrl: './templates/latestNews.html'
			})

			.state('be-a-man', {
				url: '/latest-news/be-a-man',
				templateUrl: './templates/be-a-man.html'
			})

			.state('join-us', {
				url: '/join-us', 
				templateUrl: './templates/joinUs.html'
			})

			.state('press-releases', {
				url: '/press-releases', 
				templateUrl: './templates/pressReleases.html'
			})

			.state('register', {
				url: '/register',
				templateUrl: './templates/register.html'
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