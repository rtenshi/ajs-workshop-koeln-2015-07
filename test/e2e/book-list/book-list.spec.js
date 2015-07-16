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

    it('should properly filter the list', function() {
        var bookList = element.all(by.repeater('book in BookListComponentCtrl.books'));
        expect(bookList.count()).toBe(3);

        var searchTextInput = element(by.model('searchText'));
        searchTextInput.sendKeys('coffeescript');

        expect(bookList.count()).toBe(1);
        expect(bookList.get(0).element(by.binding('book.isbn')).getText()).toBe('978-3-86490-050-1');
    });

    it('should properly open the deletion dialog', function() {
        var messageDialogParentDiv = element(by.css('message-dialog > div'));
        expect(messageDialogParentDiv.getCssValue('display')).toBe('none');

        var bookList = element.all(by.repeater('book in BookListComponentCtrl.books'));
        var deleteBtn = bookList.get(0).element(by.css('button'));
        deleteBtn.click();

        expect(messageDialogParentDiv.getCssValue('display')).toBe('block');
    });

});