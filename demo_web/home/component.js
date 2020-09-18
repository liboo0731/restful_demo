angular.module('home').component('home', {
    bindings: {
        data: '<'
    },
    templateUrl: 'home/template.html?' + resourcesVersion,
    controller: ['homeService',
    function(homeService) {
        var self = this;
        self.submit = function(form, event) {
            homeService.file($.param({
                'a': '123'
            })).$promise.then(function(resp) {
                c_type = resp.$httpHeaders['content-type']
                //                    f_name = window.decodeURI(resp.$httpHeaders['content-disposition'].split('=')[1].replace(/^\s*|\s*$/g,""), "UTF-8");
                f_name = resp.$httpHeaders['content-disposition'].split('=')[1];
                console.log(f_name, c_type);
                var blob = new Blob([resp.$httpData], {
                    type: c_type
                });
                //                        var fileUrl = URL.createObjectURL(blob);
                //                        window.open(fileUrl);
                var reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = function(e) {
                    var a = document.createElement('a');
                    a.download = f_name;
                    a.href = e.target.result;
                    $("body").append(a);
                    a.click();
                    $(a).remove();
                }

                return resp
            });
        }
    }]
});