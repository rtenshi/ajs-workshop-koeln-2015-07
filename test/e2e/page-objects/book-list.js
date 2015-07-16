"use strict";

var defaultConfig = {
    url: 'http://localhost:8080/#/books',
    heading1: 'h1',
    repeaterExpression: 'book in BookListComponentCtrl.books',
    searchTextModel: 'searchText',
    isbnBindingExpression: 'book.isbn',
    messageDialogDivSelector: 'message-dialog > div',
    buttonSelector: 'button'
};

function BookList(config) {
    extend(this, defaultConfig);

    if (config) {
        extend(this, config);
    }
}

BookList.prototype.open = function() {};

BookList.prototype.getHeading = function() {};

BookList.prototype.getBookList = function() {};

BookList.prototype.getBookCount = function() {};

BookList.prototype.getIsbnByIndex = function(rowIndex) {};

BookList.prototype.search = function(searchText) {};

BookList.prototype.getMessageDialog = function() {};

BookList.prototype.isMessageDialogVisible = function() {};

BookList.prototype.clickOnDeleteButton = function(rowIndex) {};

module.exports = BookList;