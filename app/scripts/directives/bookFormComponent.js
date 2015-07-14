(function(module) {

    module.directive('bookFormComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookFormComponent.html',
            controller: BookFormComponentCtrl,
            controllerAs: 'BookFormComponentCtrl'
        };
    });

    function BookFormComponentCtrl(BookDataService) {

    }

    BookFormComponentCtrl.prototype.storeBook = function(book) {
        console.log('storeBook', book);
    };

})(angular.module('ciApp'));