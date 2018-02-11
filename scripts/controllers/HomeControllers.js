'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('mobile_parking')
        .controller('HomeControllers', function ($scope, $http, HomeServices) {
            $scope.judul = 'Tempat Parkir';
            $scope.dataTempat = [];

            $scope.getTempat = function (txtSearch, pageNumber) {
                HomeServices.ambil().success(function (data) {
                    $scope.dataTempat = data.data;
                });
            };

            $scope.reload = function () {
                HomeServices.ambil().success(function (data) {
                    $scope.getTempat();
                    console.log('Tempat Parkir is Work');
                });
            };
            $scope.reload();
        });