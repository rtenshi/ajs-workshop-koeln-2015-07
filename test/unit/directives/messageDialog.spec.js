"use strict";

describe('Directive messageDialog', function() {

    var $compile, $rootScope;

    var usageTemplate = '<message-dialog visible="BookListComponentCtrl.dialogVisible" \
                            title="BookListComponentCtrl.dialogTitle" \
                            on-yes="BookListComponentCtrl.performDeletion()" \
                            on-no="BookListComponentCtrl.cancelDeletion()"> \
                            Soll das Buch <em>{{ BookListComponentCtrl.bookToDelete.title }}</em> wirklich gelöscht werden? \
                         </message-dialog>';

    beforeEach(module('ciApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should properly set the title', function() {
        var parentScope = $rootScope.$new();
        parentScope.BookListComponentCtrl = {
            dialogTitle: 'test'
        };

        var scopeLinkingFn = $compile(usageTemplate);
        var jqElem = scopeLinkingFn(parentScope);
        parentScope.$apply();

        expect(jqElem.find('div.title').text()).toBe(parentScope.BookListComponentCtrl.dialogTitle.toUpperCase());
    });

});