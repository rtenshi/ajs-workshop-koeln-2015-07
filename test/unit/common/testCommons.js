(function(module) {

    module.value('isValidBook', function(b) {
        return angular.isDefined(b)
            && angular.isString(b.title)
            && angular.isString(b.author)
            && angular.isString(b.isbn)
            && angular.isNumber(b.numPages);
    });

    module.value('getDirectiveScope', function(jqElem) {
        return jqElem.children().first().scope();
    });

    module.factory('directiveHelper', function($rootScope, $compile) {

        function prepareDirective(parentScopeManipulationFn, usageTemplate) {
            var parentScope = $rootScope.$new();
            parentScopeManipulationFn(parentScope);
            var scopeLinkingFn = $compile(usageTemplate);
            var jqElem = scopeLinkingFn(parentScope);
            parentScope.$apply();

            return jqElem;
        }

        return {
            prepareDirective: prepareDirective
        };
    });

})(angular.module('testCommons', []));