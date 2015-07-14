(function(module) {

    module.directive('bookListComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookListComponent.html',
            controller: BookListComponentCtrl,
            controllerAs: 'BookListComponentCtrl'
        };
    });

    function BookListComponentCtrl() {
        this.books = [
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
    }

})(angular.module('ciApp'));