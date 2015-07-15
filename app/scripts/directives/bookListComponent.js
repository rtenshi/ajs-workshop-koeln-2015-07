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
        this.dialogVisible = true;
        this.dialogTitle = 'Wirklich löschen?';
        this.bookToDelete = book;
    };

    BookListComponentCtrl.prototype.performDeletion = function() {
        console.log('perform deletion', this.bookToDelete);
    };

    BookListComponentCtrl.prototype.cancelDeletion = function() {
        console.log('cancel deletion');
        delete this.dialogVisible;
        delete this.dialogTitle;
        delete this.bookToDelete;
    };

})(angular.module('ciApp'));