angular.module('ciApp').filter('reduce', function() {
    return function(arr, numPages) {
        if (!angular.isArray(arr) || !numPages) {
            return arr;
        }


        return arr.filter(function(book) {
            return book.numPages < numPages;
        });
    };
});