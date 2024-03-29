(function(module) {

    module.directive('bookFormComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookFormComponent.html',
            controller: BookFormComponentCtrl,
            controllerAs: 'BookFormComponentCtrl'
        };
    });

    function BookFormComponentCtrl($controller, $scope) {
        var bookFormCtrlInstance = $controller('BookFormCtrl', {$scope: $scope});
        angular.extend(this, bookFormCtrlInstance);

        var self = this;
        this.primaryAction = function(book) {
            self.BookDataService.storeBook(book).then(function(response) {
                if (response.data) {
                    self.$location.path('/books');
                }
            });
        };
    }


})(angular.module('ciApp'));