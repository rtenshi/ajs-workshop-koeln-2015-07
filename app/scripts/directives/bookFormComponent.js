(function(module) {

    module.directive('bookFormComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookFormComponent.html',
            controller: BookFormComponentCtrl,
            controllerAs: 'BookFormComponentCtrl'
        };
    });

    function BookFormComponentCtrl($location, BookDataService) {
        this.$location = $location;
        this.BookDataService = BookDataService;
    }

    BookFormComponentCtrl.prototype.storeBook = function(book) {
        var self = this;
        this.BookDataService.storeBook(book).then(function(response) {
            if (response.data) {
                self.$location.path('/books');
            }
        });
    };

})(angular.module('ciApp'));