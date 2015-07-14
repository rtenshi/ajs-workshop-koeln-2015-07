angular.module('ciApp').directive('validateIsbn', function() {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ngModelCtrl) {
            console.log('validateIsbn');


            ngModelCtrl.$validators.isbn = function (modelValue, viewValue) {
                if (ngModelCtrl.$isEmpty(modelValue)) {
                    // consider empty models to be invalid
                    return false;
                } else {
                    return isValidISBN(viewValue);
                }
            };

            var replaceRegex = /[^\dX]/gi;
            function isValidISBN (isbn) {
                isbn = isbn.replace(replaceRegex, '');
                if (isbn.length != 10) {
                    return false;
                }

                var chars = isbn.split('');
                if (chars[9].toUpperCase() == 'X') {
                    chars[9] = 10;
                }

                var sum = 0;
                for (var i = 0; i < chars.length; i++) {
                    sum += ((10-i) * parseInt(chars[i]));
                }

                return ((sum % 11) == 0);
            }
        }
    };
});