(function(module) {

    module.directive('bookListComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookListComponent.html',
            controller: BookListComponentCtrl,
            controllerAs: 'BookListComponentCtrl'
        };
    });

    function BookListComponentCtrl(BookDataService) {
        this.books = BookDataService.getAllBooks();
    }

})(angular.module('ciApp'));