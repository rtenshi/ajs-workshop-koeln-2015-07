"use strict";

var BookListView = require('../page-objects/book-list');

describe('Book list view', function() {
    var bookListView;

    beforeEach(function() {
        bookListView = new BookListView();
        bookListView.open();
    });

    it('should be properly loaded', function() {
        expect(bookListView.getHeading()).toBe('Book List');
    });

    it('should contain 3 books', function() {
        var bookCount = bookListView.getBookCount();
        expect(bookCount).toBe(3);
    });

    it('should properly filter the list', function() {
        expect(bookListView.getBookCount()).toBe(3);

        bookListView.search('coffeescript');

        expect(bookListView.getBookCount()).toBe(1);
        expect(bookListView.getIsbnByIndex(0)).toBe('978-3-86490-050-1');
    });

    it('should properly open the deletion dialog', function() {
        expect(bookListView.isMessageDialogVisible()).toBe(false);

        bookListView.clickOnDeleteButton(0);

        expect(bookListView.isMessageDialogVisible()).toBe(true);
    });

    iit('should properly create and delete books', function() {
        bookListView.openBookForm();
        bookListView.setBookFormTitle('phils buch');
        bookListView.setBookFormAuthor('phil');
        bookListView.setBookFormIsbn('0000000000');
        bookListView.setBookFormNumPages('5');
        bookListView.clickOnCreateButton();
        expect(browser.getLocationAbsUrl()).toBe('http://localhost:8080/#/books');
    });

});