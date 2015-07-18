"use strict";

var BookListView = require('../page-objects/book-list'),
    NewBookFormView = require('../page-objects/new-book-form');

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
        var newBookFormView = new NewBookFormView();
        var bookTitle = 'phils buch';
        var bookIsbn = '0000000000';

        newBookFormView.open();
        newBookFormView.setBookFormTitle(bookTitle);
        newBookFormView.setBookFormAuthor('phil');
        newBookFormView.setBookFormIsbn(bookIsbn);
        newBookFormView.setBookFormNumPages('5');
        newBookFormView.clickOnCreateButton();

        expect(browser.getLocationAbsUrl()).toBe('/books');

        bookListView.search(bookTitle);
        expect(bookListView.getIsbnByIndex(0)).toBe(bookIsbn);
        expect(bookListView.getBookCount()).toBe(1);

        bookListView.clickOnDeleteButton(0);
        bookListView.performDeletion();

        expect(bookListView.getBookCount()).toBe(0);
    });

});