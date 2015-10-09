angular.module('MainCtrl', ['ngMaterial']).controller('MainController', function($scope, $rootScope, DashPlate, $location) {


	$scope.submitDetails = function(){

        var obj = {
            "email": $scope.email,
            "emirate": $scope.emirate,
            "numberPlate": $scope.numberPlate
        }
        DashPlate.getPrice(obj, function(data){
            console.log(data);
                $rootScope.data = data;
                $location.path('/dashplate');
            },
            function(err){
                console.log(err);
            });

	}

});