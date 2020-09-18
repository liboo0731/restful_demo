define(['js/angular'],
function() {
    var homeModule = angular.module('home', ['ui.router', 'ngResource', 'oc.lazyLoad']);
    homeModule.config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            component: 'home',
            resolve: {
                data: ['homeService',
                function(homeService) {
                    return homeService.get().$promise.then(function(resp) {
                        if (resp.status != 200) {
                            return
                        }
                        return resp.data
                    });
                }]
            },
            lazyLoad: function($transition$) {
                return $transition$.injector().get('$ocLazyLoad').load(['home/component']);
            }
        });
    }]);
});