(function(module) {

    module.directive('bookDetailsComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookDetailsComponent.html',
            controller: BookDetailsComponentCtrl,
            controllerAs: 'BookDetailsComponentCtrl'
        };
    });

    function BookDetailsComponentCtrl($routeParams, BookDataService) {
        var self = this;
        BookDataService.getBookByIsbn($routeParams.isbn).then(function(response) {
            self.book = response.data;
        });
    }

})(angular.module('ciApp'));