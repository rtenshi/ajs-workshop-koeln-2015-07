angular.module('ciApp').factory('DataEnhancer', function() {
    function enhance(s) {
        return s;
    }

    return {
        enhance: enhance
    };
});