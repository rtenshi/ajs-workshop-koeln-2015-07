(function(module) {

    module.service('BookDataService', BookDataService);

    function BookDataService($http) {
        var baseUrl = 'http://ajs-workshop.herokuapp.com/api';

        this.getAllBooks = function() {
            return $http.get(baseUrl + '/books');
        };

        this.getBookByIsbn = function(isbn) {
            return $http.get(baseUrl + '/books/' + isbn);
        };

        this.storeBook = function(book) {
            return $http.post(baseUrl + '/books', book);
        };

        this.deleteBookByIsbn = function(isbn) {
            return $http.delete(baseUrl + '/books/' + isbn);
        };
    }

})(angular.module('ciApp'));