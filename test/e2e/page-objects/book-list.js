"use strict";

var extend = require('extend');

var defaultConfig = {
    url: 'http://localhost:8080/#/books',
    bookFormUrl: 'http://localhost:8080/#/new-book',
    heading1: 'h1',
    repeaterExpression: 'book in BookListComponentCtrl.books',
    searchTextModel: 'searchText',
    isbnBindingExpression: 'book.isbn',
    messageDialogDivSelector: 'message-dialog > div',
    buttonSelector: 'button'
};

function BookList(config) {
    if (!(this instanceof BookList)) {
        return new BookList(config);
    }

    extend(this, defaultConfig);

    if (config) {
        extend(this, config);
    }
}

BookList.prototype.open = function() {
    browser.get(this.url);
};

BookList.prototype.getHeading = function() {
    return element(by.css(this.heading1)).getText();
};

BookList.prototype.getBookList = function() {
    return element.all(by.repeater('book in BookListComponentCtrl.books'));
};

BookList.prototype.getBookCount = function() {
    return this.getBookList().count();
};

BookList.prototype.getIsbnByIndex = function(rowIndex) {
    return this.getBookList().get(rowIndex).element(by.binding(this.isbnBindingExpression)).getText();
};

BookList.prototype.search = function(searchText) {
    var searchTextInput = element(by.model(this.searchTextModel));
    searchTextInput.sendKeys(searchText);

    return searchTextInput;
};

BookList.prototype.getMessageDialog = function() {
    return element(by.css(this.messageDialogDivSelector));
};

BookList.prototype.getPerformDeletionButton = function() {
    return this.getMessageDialog().all(by.css('button')).get(0);
};

BookList.prototype.isMessageDialogVisible = function() {
    return this.getMessageDialog().getCssValue('display').then(function(returnVal) {
        return returnVal !== 'none';
    });
};

BookList.prototype.clickOnDeleteButton = function(rowIndex) {
    var deleteBtn = this.getBookList().get(rowIndex).element(by.css(this.buttonSelector));
    deleteBtn.click();

    return deleteBtn;
};

BookList.prototype.performDeletion = function() {
    this.getPerformDeletionButton().click();
};

module.exports = BookList;