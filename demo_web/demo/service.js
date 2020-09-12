angular.module('demo').factory('demoService',['$resource','basePath', function($resource,basePath){
	return $resource(basePath+'/data/demo.json',{},{});
}]);