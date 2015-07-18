"use strict";

var extend = require('extend');

var defaultConfig = {
    bookFormUrl: 'http://localhost:8080/#/new-book',
    bookTitleModel: 'BookFormComponentCtrl.book.title',
    bookAuthorModel: 'BookFormComponentCtrl.book.author',
    bookIsbnModel: 'BookFormComponentCtrl.book.isbn',
    bookNumPagesModel: 'BookFormComponentCtrl.book.numPages',
    buttonSelector: 'button'
};

function NewBookForm(config) {
    if (!(this instanceof NewBookForm)) {
        return new NewBookForm(config);
    }

    extend(this, defaultConfig);

    if (config) {
        extend(this, config);
    }
}

NewBookForm.prototype.open = function() {
    browser.get(this.bookFormUrl);
};

NewBookForm.prototype.setBookFormTitle = function(value) {
    this.setBookFormData(this.bookTitleModel, value);
};

NewBookForm.prototype.setBookFormAuthor = function(value) {
    this.setBookFormData(this.bookAuthorModel, value);
};

NewBookForm.prototype.setBookFormIsbn = function(value) {
    this.setBookFormData(this.bookIsbnModel, value);
};

NewBookForm.prototype.setBookFormNumPages = function(value) {
    this.setBookFormData(this.bookNumPagesModel, value);
};

NewBookForm.prototype.setBookFormData = function(modelExpression, value) {
    element(by.model(modelExpression)).sendKeys(value);
};

NewBookForm.prototype.clickOnCreateButton = function() {
    element(by.css(this.buttonSelector)).click();
};

module.exports = NewBookForm;