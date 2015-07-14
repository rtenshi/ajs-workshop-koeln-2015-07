(function(module) {

    module.directive('colorPickerComponent', function() {

        return {
            restrict: 'E', // E = element (tag)
            templateUrl: 'templates/directives/colorPickerComponent.html',
            scope: {},
            controller: ColorPickerComponentCtrl,
            controllerAs: 'ColorPickerComponentCtrl'
        };

    });

    function ColorPickerComponentCtrl() {
        this.r = 0;
        this.g = 0;
        this.b = 255;
    }

    ColorPickerComponentCtrl.prototype.sayHello = function() {
        console.log('Hello', this.r, this.g, this.b);
    };

})(angular.module('ciApp'));