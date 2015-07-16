(function(module) {

    module.provider('BookDataService', function() {

        var _baseUrl = 'http://localhost:8080';

        this.setBaseUrl = function(baseUrl) {
            _baseUrl = baseUrl;
        };

        this.$get = function($http, DataEnhancer) {
            return new BookDataService($http, DataEnhancer, _baseUrl);
        };
    });

    function BookDataService($http, DataEnhancer, baseUrl) {
        this.$http = $http;
        this.DataEnhancer = DataEnhancer;
        this.baseUrl = baseUrl;
    }

    BookDataService.prototype.getAllBooks = function() {
        var self = this;

        return this.$http.get(this.baseUrl + '/books').then(function(response) {
            if (angular.isArray(response.data)) {
                response.data.forEach(function(b) {
                    b.title = self.DataEnhancer.enhance(b.title);
                });
            }

            return response;
        });
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