var App = angular.module('starter', [
													'ui.router',
													'general.controller'
												]);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise("/");

		$stateProvider

			.state('app', {
				url: '/',
				templateUrl: './templates/index.html',
				controller: 'GeneralCtrl'
			})

			.state('aboutGavin', {
				url: '/about-Gavin',
				templateUrl: './templates/about/aboutGavin.html',
				controller: 'GeneralCtrl'
			})

			.state('aboutJennifer', {
				url:'/about-Jennifer',
				templateUrl: './templates/about/aboutJennifer.html',
				controller: 'GeneralCtrl'
			})

			.state('contact', {
				url: '/contact',
				templateUrl: './templates/contact.html',
				controller: 'GeneralCtrl'
			})

			.state('endorse', {
				url: '/endorse',
				templateUrl: './templates/endorse.html',
				controller: 'GeneralCtrl'
			})

			.state('get-involved', {
				url: '/get-involved',
				templateUrl: './templates/getInvolved.html',
				controller: 'GeneralCtrl'
			})

			.state('issues', {
				url: '/issues',
				templateUrl: './templates/issues.html',
				controller: 'GeneralCtrl'
			})

			.state('economy', {
				url: '/issues/economy',
				templateUrl: './templates/issues/economy.html',
				controller: 'GeneralCtrl'
			})

			.state('energy', {
				url: '/issues/energy',
				templateUrl: './templates/issues/energy.html',
				controller: 'GeneralCtrl'
			})

			.state('civilRights', {
				url: '/issues/civil-rights', 
				templateUrl: './templates/issues/civilRights.html',
				controller: 'GeneralCtrl'
			})

			.state('schools', {
				url: '/issues/schools',
				templateUrl: './templates/issues/schools.html',
				controller: 'GeneralCtrl'
			})

			.state('drugPolicy', {
				url: '/issues/drug-policy', 
				templateUrl: './templates/issues/drugPolicy.html',
				controller: 'GeneralCtrl'
			})

			.state('government', {
				url: '/issues/government', 
				templateUrl: './templates/issues/government.html',
				controller: 'GeneralCtrl'
			})

			.state('latest-news', {
				url: '/latest-news',
				templateUrl: './templates/latestNews.html',
				controller: 'GeneralCtrl'
			})

			.state('be-a-man', {
				url: '/latest-news/be-a-man',
				templateUrl: './templates/be-a-man.html',
				controller: 'GeneralCtrl'
			})

			.state('join-us', {
				url: '/join-us', 
				templateUrl: './templates/joinUs.html',
				controller: 'GeneralCtrl'
			})

			.state('press-releases', {
				url: '/press-releases', 
				templateUrl: './templates/pressReleases.html',
				controller: 'GeneralCtrl'
			})

			.state('register', {
				url: '/register',
				templateUrl: './templates/register.html',
				controller: 'GeneralCtrl'
			})

			.state('volunteer', {
				url: '/volunteer',
				templateUrl: './templates/volunteer.html',
				controller: 'GeneralCtrl'
			})

			.state('marriageEqualityWinterOfLove', {
				url: '/marriage-equality-winter-of-love',
				templateUrl: './templates/marriage-equality-winter-of-love.html', 
				controller: 'GeneralCtrl'
			})

			.state('privacyPolicy', {
				url: '/privacy-policy',
				templateUrl: './templates/privacyPolicy.html',
				controller: 'GeneralCtrl'
			});


		// $locationProvider.html5Mode({
		// 	enabled: true,
		// 	requiredBase: false
		// });

	}]);