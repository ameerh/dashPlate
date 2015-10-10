angular.module('DashPlateService', []).factory('DashPlate', ['$http', function($http) {

    return {
        getPrice: function (obj, success, error) {
            $http.post('/dash-plate-api', obj, {}).
                success(function (data) {
                    console.log(data);
                    success(data)
                }).
                error(function (data) {
                    error(data);
                });
        }
    }
	

}]);
