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
        console.log('BookDetailsComponentCtrl', $routeParams.isbn);

        this.book = BookDataService.getBookByIsbn($routeParams.isbn);
    }

})(angular.module('ciApp'));