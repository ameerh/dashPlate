angular.module('DashPlateService', []).factory('DashPlate', ['$http', function($http) {

    return {
        getPrice: function (obj, success, error) {
            $http.get('/dash-plate-api').
                success(function (data) {
                    success(data)
                }).
                error(function (data) {
                    error(data);
                });
        }
    }
	

}]);
