'use strict';

angular.module('mobile_parking')
        .factory('HomeServices', function ($http) {
//            var url = 'http://80.211.135.231/mobile_parking/public/api/tempat';
            var url = 'http://localhost/mobile_parking/public/api/tempat';
            return {
                simpan: function (obj, ori) {
                    if (ori === null || ori === undefined) {
                        return $http.post(url, obj);
                    } else {
                        return $http.put(url + '/' + obj.id, obj);
                    }
                },
                ambil: function () {
                    return $http.get(url);
                },
                hapus: function (obj) {
                    return $http.delete(url + '/' + obj);
                },
                ambilSatu: function (obj) {
                    return $http.get(url + '/' + obj + '/edit');
                }
            };
        });