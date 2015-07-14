(function(module) {

    module.service('BookDataService', BookDataService);

    var books = [
        {
            title: 'AngularJS for Beginners',
            author: 'foo',
            isbn: '123-456-789',
            numPages: 123
        },
        {
            title: 'Angular 2 for Beginners',
            author: 'bar',
            isbn: '111-111-111',
            numPages: 80
        },
        {
            title: 'EmberJS for Beginners',
            author: 'whatever',
            isbn: '222-222-222',
            numPages: 100
        }
    ];


    function BookDataService($q) {
        this.getAllBooks = function() {
            return $q.when({
                data: angular.copy(books)
            });
        };

        this.getBookByIsbn = function(isbn) {
            var result = books.filter(function(b) {
                return isbn === b.isbn;
            });

            if (result.length === 0) {
                return $q.when({data: null});
            } else {
                return $q.when({data: angular.copy(result[0])});
            }
        };
    }

})(angular.module('ciApp'));