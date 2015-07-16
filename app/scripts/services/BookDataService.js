(function(module) {

    module.provider('BookDataService', function() {

        var _baseUrl = 'http://localhost:8080';

        this.setBaseUrl = function(baseUrl) {
            _baseUrl = baseUrl;
        };

        this.$get = function($http) {
            return new BookDataService($http, _baseUrl);
        };
    });

    function BookDataService($http, baseUrl) {
        this.$http = $http;
        this.baseUrl = baseUrl;
    }

    BookDataService.prototype.getAllBooks = function() {
        return this.$http.get(this.baseUrl + '/books');
    };

    BookDataService.prototype.getBookByIsbn = function(isbn) {
        return this.$http.get(this.baseUrl + '/books/' + isbn);
    };

    BookDataService.prototype.storeBook = function(book) {
        return this.$http.post(this.baseUrl + '/books', book);
    };

    BookDataService.prototype.deleteBookByIsbn = function(isbn) {
        return this.$http.delete(this.baseUrl + '/books/' + isbn);
    };

    BookDataService.prototype.updateBook = function(book) {
        return this.$http.put(this.baseUrl + '/books/' + book.isbn, book);
    };

})(angular.module('ciApp'));