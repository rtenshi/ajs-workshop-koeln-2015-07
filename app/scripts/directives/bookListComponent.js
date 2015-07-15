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
        var self = this;
        BookDataService.getAllBooks().then(function(response) {
            self.books = response.data;
        });
    }

    BookListComponentCtrl.prototype.deleteBook = function(book) {
        console.log('delete book', book);
    };

})(angular.module('ciApp'));