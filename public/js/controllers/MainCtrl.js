angular.module('MainCtrl', ['ngMaterial']).controller('MainController', function($scope, $rootScope, DashPlate, $location) {
	$scope.submitDetails = function(){
        var obj = {
            "email": $scope.email,
            "emirate": $scope.emirate,
            "numberPlate": $scope.numberPlate
        }
        DashPlate.getPrice(obj, function(data){
            $rootScope.inputObj = obj;
            $rootScope.plateData = data;
            $location.path('/dashplate');
        },
        function(err){
            console.log(err);
        });
	}
});