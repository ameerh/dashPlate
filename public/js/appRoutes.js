angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/dashplate', {
			templateUrl: 'views/dash-plate.html',
			controller: 'DashPlateController'
		})

	$locationProvider.html5Mode(true);

}]);