(function(module) {

    module.value('isValidBook', function(b) {
        return angular.isDefined(b)
            && angular.isString(b.title)
            && angular.isString(b.author)
            && angular.isString(b.isbn)
            && angular.isNumber(b.numPages);
    });

})(angular.module('testCommons', []));