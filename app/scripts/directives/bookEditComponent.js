(function(module) {

    module.directive('bookEditComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookFormComponent.html',
            controller: BookEditComponentCtrl,
            controllerAs: 'BookFormComponentCtrl'
        };
    });

    function BookEditComponentCtrl($routeParams, $controller, $scope) {
        var bookFormCtrlInstance = $controller('BookFormCtrl', {$scope: $scope});
        angular.extend(this, bookFormCtrlInstance);

        var self = this;
        this.BookDataService.getBookByIsbn($routeParams.isbn).then(function(response) {
            self.book = response.data;
        });

        this.book = {
            title: 'Loading...',
            author: 'Loading...',
            isbn: '0000000000',
            numPages: 0
        };

        this.primaryAction = function(book) {
            self.BookDataService.updateBook(book).then(function(response) {
                if (response.data) {
                    self.$location.path('/books');
                }
            });
        };
    }

})(angular.module('ciApp'));