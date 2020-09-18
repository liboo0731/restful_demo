angular.module('home').factory('homeService', ['$resource', 'basePath',
function($resource, basePath) {
    return $resource(basePath + '/hello', {},
    {
        file: {
            method: 'post',
            responseType: 'blob',
            interceptor: {
                response: function(response) {
                    response.resource.$httpHeaders = response.headers();
                    response.resource.$httpData = response.data;
                    return response.resource
                }
            }
        }
    });
}]);