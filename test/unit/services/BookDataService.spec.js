"use strict";

describe('Service BookDataService', function() {

    var $rootScope;
    var BookDataService, isValidBook;

    beforeEach(module('ciApp'));
    beforeEach(module('testCommons'));

    beforeEach(inject(function(_BookDataService_, _isValidBook_, _$rootScope_) {
        BookDataService = _BookDataService_;
        isValidBook = _isValidBook_;
        $rootScope = _$rootScope_;
    }));

    it('should be defined', function() {
        expect(BookDataService).toBeDefined();
    });


    describe('getAllBooks()', function() {
        it('should be a function', function() {
            expect(angular.isFunction(BookDataService.getAllBooks)).toBe(true);
        });

        it('should return an array', function() {
            var books;
            BookDataService.getAllBooks().then(function(response) {
                books = response.data;
            });
            $rootScope.$apply();
            expect(angular.isArray(books)).toBe(true);
        });

        it('should return an array of book objects', function() {
            var books;
            BookDataService.getAllBooks().then(function(response) {
                books = response.data;
            });
            $rootScope.$apply();
            var isBookArray = books.every(function(b) {
                return isValidBook(b);
            });
            expect(books.length).toBeGreaterThan(0);
            expect(isBookArray).toBe(true);
        });

        it('should return a deep copy of the internal array', function() {
            var books1;
            BookDataService.getAllBooks().then(function(response) {
                books1 = response.data;
            });

            var books2;
            BookDataService.getAllBooks().then(function(response) {
                books2 = response.data;
            });

            $rootScope.$apply();

            expect(books1).not.toBe(books2);
            books1.forEach(function(b, i) {
                expect(books2[i]).not.toBe(b);
            });
        });
    });

    describe('deleteBookByIsbn()', function() {
        it('should properly delete a book object', function() {
            var numBooksBefore = getNumberOfBooks();

            var deleted = false;
            var isbn = '123-456-789';
            BookDataService.deleteBookByIsbn(isbn).then(function(response) {
                deleted = response.data;
            });

            $rootScope.$apply();

            var numBooksAfter = getNumberOfBooks();
            expect(deleted).toBe(true);
            expect(numBooksAfter).toBe(numBooksBefore - 1);
        });
    });

    function getNumberOfBooks() {
        var num;

        BookDataService.getAllBooks().then(function(response) {
            num = response.data.length;
        });
        $rootScope.$apply();

        return num;
    }

});
