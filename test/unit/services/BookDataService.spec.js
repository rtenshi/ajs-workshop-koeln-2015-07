"use strict";

describe('Service BookDataService', function() {

    var BookDataService;

    beforeEach(module('ciApp'));

    beforeEach(inject(function(_BookDataService_) {
        BookDataService = _BookDataService_;
    }));

    it('should be defined', function() {
        expect(BookDataService).toBeDefined();
    });


    describe('getAllBooks()', function() {
        it('should be a function', function() {
            expect(angular.isFunction(BookDataService.getAllBooks)).toBe(true);
        });

        it('should return an array', function() {
            var books = BookDataService.getAllBooks();
            expect(angular.isArray(books)).toBe(true);
        });

        it('should return an array of book objects', function() {
            var books = BookDataService.getAllBooks();
            var isBookArray = books.every(function(b) {
                return isValidBook(b);
            });
            expect(books.length).toBeGreaterThan(0);
            expect(isBookArray).toBe(true);
        });

        it('should return a deep copy of the internal array', function() {
            var books1 = BookDataService.getAllBooks(),
                books2 = BookDataService.getAllBooks();

            expect(books1).not.toBe(books2);
            books1.forEach(function(b, i) {
                expect(books2[i]).not.toBe(b);
            });
        });
    });


    function isValidBook(b) {
        return angular.isDefined(b)
                && angular.isString(b.title)
                && angular.isString(b.author)
                && angular.isString(b.isbn)
                && angular.isNumber(b.numPages);
    }

});
