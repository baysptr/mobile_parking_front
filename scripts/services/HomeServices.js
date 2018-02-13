'use strict';

angular.module('mobile_parking')
        .factory('HomeServices', function ($http) {
//            var url = 'http://80.211.135.231/mobile_parking/public/api/tempat';
            var url = 'http://localhost:8000/api/tempat';
            return {
                simpan: function (obj) {
                    return $.ajax({
                        url: url,
                        type: 'POST',
                        data: obj
                    });
                },
                ambil: function () {
                    return $http.get(url);
                },
                hapus: function (obj) {
                    return $http.post(url + '/' + obj);
                },
                ambilSatu: function (obj) {
                    return $http.get(url + '/' + obj + '/edit');
                }
            };
        });