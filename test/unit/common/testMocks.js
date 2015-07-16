(function(module) {

    module.provider('MockDataEnhancer', function() {
        var mockDataEnhancer = {
            enhance: function(s) {
                return s + ' ### MOCKED!!!';
            }
        };

        this.getMockDataEnhancer = function() {
            return mockDataEnhancer;
        };

        this.$get = function() {
            return mockDataEnhancer;
        };
    });

})(angular.module('testMocks', []));