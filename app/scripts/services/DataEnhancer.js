angular.module('ciApp').factory('DataEnhancer', function() {
    function enhance(s) {
        return s + ' ### PWNED!';
    }

    return {
        enhance: enhance
    };
});