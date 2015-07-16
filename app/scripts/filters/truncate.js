angular.module('ciApp').filter('truncate', function() {
    return function(input, charCount, suffix) {
        if (input.length > charCount) {
            return input.substr(0, charCount) + suffix;
        } else {
            return input;
        }
    };
});