(function(module) {

    module.directive('bookDetailsComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookDetailsComponent.html',
            controller: BookDetailsComponentCtrl,
            controllerAs: 'BookDetailsComponentCtrl'
        };
    });

    function BookDetailsComponentCtrl($routeParams) {
        console.log('BookDetailsComponentCtrl', $routeParams.isbn);

        this.book = {
            title: 'AngularJS for Beginners',
            author: 'foo',
            isbn: '123-456-789',
            numPages: 123
        };
    }

})(angular.module('ciApp'));