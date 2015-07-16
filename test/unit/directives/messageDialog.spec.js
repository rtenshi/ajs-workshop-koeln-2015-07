"use strict";

describe('Directive messageDialog', function() {

    var $compile, $rootScope;
    var directiveHelper, getDirectiveScope, usageTemplate;

    beforeEach(module('ciApp'));
    beforeEach(module('testCommons'));
    beforeEach(module('testData'));

    beforeEach(inject(function(_messageDialogTemplateString_, _directiveHelper_, _getDirectiveScope_, _$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        directiveHelper = _directiveHelper_;
        getDirectiveScope = _getDirectiveScope_;
        usageTemplate = _messageDialogTemplateString_;
    }));

    it('should properly set the title', function() {
        var BookListComponentCtrl = {
            dialogTitle: 'test'
        };

        var jqElem = directiveHelper.prepareDirective(function(parentScope) {
            parentScope.BookListComponentCtrl = BookListComponentCtrl;
        }, usageTemplate).jqElem;

        expect(jqElem.find('div.title').text()).toBe(BookListComponentCtrl.dialogTitle.toUpperCase());
    });

    it('should properly set the content', function() {
        var BookListComponentCtrl = {
            bookToDelete: {
                title: 'testbook'
            }
        };

        var jqElem = directiveHelper.prepareDirective(function(parentScope) {
            parentScope.BookListComponentCtrl = BookListComponentCtrl;
        }, usageTemplate).jqElem;

        expect(jqElem.find('div.content').text()).toContain(BookListComponentCtrl.bookToDelete.title);
    });

    it('should properly invoke the passed onYes fn', function() {
        var BookListComponentCtrl = {
            performDeletion: function() {}
        };

        spyOn(BookListComponentCtrl, 'performDeletion');

        var jqElem = directiveHelper.prepareDirective(function(parentScope) {
            parentScope.BookListComponentCtrl = BookListComponentCtrl;
        }, usageTemplate).jqElem;

        var directiveScope = getDirectiveScope(jqElem);
        directiveScope.MessageDialogCtrl.onYes();

        expect(BookListComponentCtrl.performDeletion).toHaveBeenCalled();
    });

    it('should properly invoke the passed onNo fn', function() {
        var BookListComponentCtrl = {
            cancelDeletion: function() {}
        };

        spyOn(BookListComponentCtrl, 'cancelDeletion');

        var jqElem = directiveHelper.prepareDirective(function(parentScope) {
            parentScope.BookListComponentCtrl = BookListComponentCtrl;
        }, usageTemplate).jqElem;

        var directiveScope = getDirectiveScope(jqElem);
        directiveScope.MessageDialogCtrl.onNo();

        expect(BookListComponentCtrl.cancelDeletion).toHaveBeenCalled();
    });

    it('should get an own scope', function() {
        var preparation = directiveHelper.prepareDirective(null, usageTemplate);
        var directiveScope = getDirectiveScope(preparation.jqElem);
        expect(preparation.parentScope.$id).not.toBe(directiveScope.$id);
    });

    it('should get an isolated scope', function() {
        var test = 'test';

        var preparation = directiveHelper.prepareDirective(function(parentScope) {
            parentScope.test = test;
        }, usageTemplate);
        var directiveScope = getDirectiveScope(preparation.jqElem);
        expect(directiveScope.test).toBeUndefined();
    });

});