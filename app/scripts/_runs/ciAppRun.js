angular.module('ciApp').run(function($rootScope) {
    console.log('transition from CONFIG to RUN');

    $rootScope.$on('$routeChangeStart', function(e, next, current) {

        console.log('$routeChangeStart', e, next, current);

    });

    $rootScope.$on('customEvent', function(e, customData) {
        console.log('customEvent', e, customData);
    })
});