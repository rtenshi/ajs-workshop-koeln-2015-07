angular.module('ciApp').factory('BookDataService', function() {

    // private state
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

    // private impl.
    function getAllBooks() {
        return angular.copy(books);
    }

    // revealing module
    return {
        getAllBooks: getAllBooks
    };
});