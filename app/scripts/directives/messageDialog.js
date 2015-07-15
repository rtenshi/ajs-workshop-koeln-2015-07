(function(module) {

    module.directive('messageDialog', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/messageDialog.html',
            scope: {
                visible: '=',
                title: '=',
                onYes: '&',
                onNo: '&'
            },
            controller: MessageDialogCtrl,
            controllerAs: 'MessageDialogCtrl',
            bindToController: true,
            transclude: true
        };
    });

    function MessageDialogCtrl() {
        this.visible = false;
    }

})(angular.module('ciApp'));