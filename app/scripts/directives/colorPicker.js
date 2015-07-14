// <color-picker></color-picker>
angular.module('ciApp').directive('colorPicker', function() {

    // Directive Definition Object (DDO)
    return {
        restrict: 'E', // E = element
        templateUrl: 'templates/directives/colorPicker.html',
        // isolated scope
        // ci-color-r="r" ci-color-g="g" ci-color-b="b"
        scope: {
            r: '=ciColorR',
            g: '=ciColorG',
            b: '=ciColorB'
        },
        link: function() {
            console.log('colorPicker instance created!');
        }
    };

});