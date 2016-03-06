var nodeApp = angular.module('nodeApp',['ui.router']);

nodeApp.config(function($stateProvider,$urlRouterProvider) {

	$urlRouterProvider.otherwise('/node');

	$stateProvider.
		state('home',{
			url: '/node',
			templateUrl: 'index.html'
			})
		.state('page1', {
			url: '/page1',
			templateUrl: 'templates/page1.html'
		})
		.state('page2',{
			url:'/page2',
			templateUrl: 'templates/page2.html'
		});
});