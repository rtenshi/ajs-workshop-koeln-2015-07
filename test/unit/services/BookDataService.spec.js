"use strict";

describe('Service BookDataService', function() {
    var baseUrl = 'http://mydomain.com';
    var $rootScope, $httpBackend;
    var BookDataService, isValidBook;

    beforeEach(module('ciApp'));
    beforeEach(module('testCommons'));
    beforeEach(module(function(BookDataServiceProvider) {
        BookDataServiceProvider.setBaseUrl(baseUrl);
    }));

    beforeEach(inject(function(_BookDataService_, _isValidBook_, _$rootScope_, _$httpBackend_) {
        BookDataService = _BookDataService_;
        isValidBook = _isValidBook_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
    }));

    beforeEach(function() {
        $httpBackend.when('GET', baseUrl + '/books').respond([]);
        $httpBackend.when('DELETE', baseUrl + '/books/123-456-789').respond(true);
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

        it('should make the corresponding http request', function() {
            $httpBackend.expectGET(baseUrl + '/books');
            BookDataService.getAllBooks();
            $httpBackend.flush(1);
        });
    });

    describe('deleteBookByIsbn()', function() {
        it('should properly delete a book object', function() {
            var isbn = '123-456-789';
            $httpBackend.expectDELETE(baseUrl + '/books/' + isbn);
            BookDataService.deleteBookByIsbn(isbn);
            $httpBackend.flush(1);
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
