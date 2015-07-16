angular.module('ciApp').config(function($routeProvider) {
    $routeProvider.when('/', {
        template: '<color-picker-component></color-picker-component>'
    }).when('/books', {
        template: '<book-list-component></book-list-component>'
    }).when('/books/:isbn', {
        template: '<book-details-component></book-details-component>'
    }).when('/books/:isbn/edit', {
        template: '<book-edit-component></book-edit-component>'
    }).when('/new-book', {
        template: '<book-form-component></book-form-component>'
    }).otherwise({
        redirectTo: '/'
    });
});