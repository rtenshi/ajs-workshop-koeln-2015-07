(function(module) {

    module.controller('BookFormCtrl', BookFormCtrl);

    function BookFormCtrl($location, $scope, $http, BookDataService) {
        this.$location = $location;
        this.BookDataService = BookDataService;

        console.log('pendingRequests', $http.pendingRequests);
        $scope.pendingRequests = $http.pendingRequests;
        $scope.$watchCollection('pendingRequests', function(newValue, oldValue) {
            console.log('pending http request', newValue, oldValue);
        });
    }

    BookFormCtrl.prototype.primaryAction = angular.noop;

})(angular.module('ciApp'));