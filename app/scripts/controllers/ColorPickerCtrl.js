(function(module) {
    module.controller('ColorPickerCtrl', ColorPickerCtrl);

    function ColorPickerCtrl() {
        this.r = 0;
        this.g = 0;
        this.b = 255;
    }

    ColorPickerCtrl.prototype.sayHello = function() {
        console.log('Hello', this.r, this.g, this.b);
    };
})(angular.module('ciApp'));