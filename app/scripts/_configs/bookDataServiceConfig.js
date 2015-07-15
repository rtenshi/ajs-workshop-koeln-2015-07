angular.module('ciApp').config(function(BookDataServiceProvider) {
    BookDataServiceProvider.setBaseUrl('http://ajs-workshop.herokuapp.com/api');
});