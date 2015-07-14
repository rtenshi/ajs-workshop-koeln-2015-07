(function(module) {

    module.directive('bookDetailsComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/bookDetailsComponent.html',
            controller: BookDetailsComponentCtrl,
            controllerAs: 'BookDetailsComponentCtrl'
        };
    });

    function BookDetailsComponentCtrl() {

    }

})(angular.module('ciApp'));