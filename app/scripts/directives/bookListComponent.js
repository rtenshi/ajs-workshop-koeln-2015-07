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
        this.BookDataService = BookDataService;
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
        var self = this;

        this.BookDataService.deleteBookByIsbn(this.bookToDelete.isbn).then(function(response) {
            if (response.data) {
                self.deleteBookLocally(self.bookToDelete);
            }
        }).then(function() {
            self.cancelDeletion();
        });
    };

    BookListComponentCtrl.prototype.cancelDeletion = function() {
        delete this.dialogVisible;
        delete this.dialogTitle;
        delete this.bookToDelete;
    };

    BookListComponentCtrl.prototype.deleteBookLocally = function(book) {
        this.books.splice(this.books.indexOf(book), 1);
    };

})(angular.module('ciApp'));