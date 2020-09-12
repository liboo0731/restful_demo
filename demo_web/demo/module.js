define([
	'js/angular'
	],function(){
	var demoModule=angular.module('demo', [
			'ui.router',
			'ngResource',
			'ngTable',
			'oc.lazyLoad']);
	demoModule.config(['$stateProvider',function($stateProvider){
		$stateProvider.state({
			name:'demo',
			url: '/demo',
			redirectTo: 'demo.list',
			lazyLoad: function($transition$){
				return $transition$.injector().get('$ocLazyLoad').load([
					'demo/service'
				]);
			}
		});
		$stateProvider.state('demo.list', {
			url: '/list',
			component: 'demoList',
			resolve: {
				data: ['demoService',function(demoService){
					return demoService.get().$promise.then(function(resp){
						return resp
					});
				}]
			},
			lazyLoad: function($transition$){
				return $transition$.injector().get('$ocLazyLoad').load(['demo/component']);
			}
		});
	}]);
});
