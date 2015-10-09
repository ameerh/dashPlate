angular.module('MainCtrl', ['ngMaterial']).controller('MainController', function($scope, $location) {


	$scope.submitDetails = function(){
		$location.path('/dashplate');
	}

});