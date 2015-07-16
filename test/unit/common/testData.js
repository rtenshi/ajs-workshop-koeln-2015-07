(function(module) {

    module.constant('messageDialogTemplateString', '<message-dialog visible="BookListComponentCtrl.dialogVisible" \
        title="BookListComponentCtrl.dialogTitle" \
        on-yes="BookListComponentCtrl.performDeletion()" \
        on-no="BookListComponentCtrl.cancelDeletion()"> \
        Soll das Buch <em>{{ BookListComponentCtrl.bookToDelete.title }}</em> wirklich gelöscht werden? \
     </message-dialog>');


    module.constant('mockedBooks', [
        {
            title: 'AngularJS for Beginners',
            author: 'foo',
            isbn: '123-456-789',
            numPages: 123
        },
        {
            title: 'Angular 2 for Beginners',
            author: 'bar',
            isbn: '111-111-111',
            numPages: 80
        },
        {
            title: 'EmberJS for Beginners',
            author: 'whatever',
            isbn: '222-222-222',
            numPages: 100
        }
    ]);

})(angular.module('testData', []));