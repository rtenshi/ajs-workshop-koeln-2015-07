"use strict";

describe('Service BookDataService', function() {

    var baseUrl = 'http://ajs-workshop.herokuapp.com/api';
    var $rootScope, $httpBackend;
    var BookDataService, isValidBook;

    beforeEach(module('ciApp'));
    beforeEach(module('testCommons'));

    beforeEach(inject(function(_BookDataService_, _isValidBook_, _$rootScope_, _$httpBackend_) {
        BookDataService = _BookDataService_;
        isValidBook = _isValidBook_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
    }));

    beforeEach(function() {
        $httpBackend.when('GET', baseUrl + '/books').respond([]);
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should be defined', function() {
        expect(BookDataService).toBeDefined();
    });


    describe('getAllBooks()', function() {
        it('should be a function', function() {
            expect(angular.isFunction(BookDataService.getAllBooks)).toBe(true);
        });

        fit('should make the corresponding http request', function() {
            $httpBackend.expectGET(baseUrl + '/books');
            BookDataService.getAllBooks();
            $httpBackend.flush(1);
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
