angular.module('home').factory('homeService',['$resource','basePath', function($resource,basePath){
	return $resource(basePath+'/data/home.json',{},{});
}]);