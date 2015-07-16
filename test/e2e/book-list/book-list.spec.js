"use strict";


describe('Book list view', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#/books');
    });

    it('should be properly loaded', function() {
        expect(element(by.css('h1')).getText()).toBe('Book List');
    });

    it('should contain 3 books', function() {
        var bookCount = element.all(by.repeater('book in BookListComponentCtrl.books')).count();
        expect(bookCount).toBe(3);
    });

});