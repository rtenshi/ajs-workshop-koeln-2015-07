"use strict";

describe('Directive messageDialog', function() {

    var $compile, $rootScope;
    var directiveHelper, getDirectiveScope;

    var usageTemplate = '<message-dialog visible="BookListComponentCtrl.dialogVisible" \
                            title="BookListComponentCtrl.dialogTitle" \
                            on-yes="BookListComponentCtrl.performDeletion()" \
                            on-no="BookListComponentCtrl.cancelDeletion()"> \
                            Soll das Buch <em>{{ BookListComponentCtrl.bookToDelete.title }}</em> wirklich gelöscht werden? \
                         </message-dialog>';

    beforeEach(module('ciApp'));
    beforeEach(module('testCommons'));

    beforeEach(inject(function(_directiveHelper_, _getDirectiveScope_, _$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        directiveHelper = _directiveHelper_;
        getDirectiveScope = _getDirectiveScope_;
    }));

    it('should properly set the title', function() {
        var BookListComponentCtrl = {
            dialogTitle: 'test'
        };

        var jqElem = directiveHelper.prepareDirective(function(parentScope) {
            parentScope.BookListComponentCtrl = BookListComponentCtrl;
        }, usageTemplate);

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
        }, usageTemplate);

        expect(jqElem.find('div.content').text()).toContain(BookListComponentCtrl.bookToDelete.title);
    });

    it('should properly invoke the passed onYes fn', function() {
        var BookListComponentCtrl = {
            performDeletion: function() {}
        };

        spyOn(BookListComponentCtrl, 'performDeletion');

        var jqElem = directiveHelper.prepareDirective(function(parentScope) {
            parentScope.BookListComponentCtrl = BookListComponentCtrl;
        }, usageTemplate);

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
        }, usageTemplate);

        var directiveScope = getDirectiveScope(jqElem);
        directiveScope.MessageDialogCtrl.onNo();

        expect(BookListComponentCtrl.cancelDeletion).toHaveBeenCalled();
    });

});