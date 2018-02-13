'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('mobile_parking')
        .controller('HomeControllers', function ($scope, $http, HomeServices, DTOptionsBuilder, DTColumnDefBuilder) {
            $scope.judul = 'Tempat Parkir';
            $scope.dataTempat = [];

            $scope.getTempat = function () {
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

            $scope.tambahData = function () {
                $('#myModal').modal('show');
            };

            $scope.simpan = function () {
                if ($scope.Tempat === undefined) {
                    swal("Oops...", "Data Belum Terisi", "error");
                } else {
                    HomeServices.simpan($scope.Tempat).done(function (data) {
                        $scope.gritterSuccess(data);
                        console.log(data);
                        $scope.clear();
                        $scope.reload();
                    });
                }
            };

            $scope.clear = function () {
                $scope.Tempat.nama_tempat = "";
                $scope.Tempat.latitude = "";
                $scope.Tempat.longtitude = "";
                $scope.Tempat.deskripsi = "";
                $('#myModal').modal("hide");
            };

            $scope.hapus = function (obj) {
                swal({
                    title: "Are you sure?",
                    text: "Apakah Anda Yakin Akan Menghapus Data ini ???",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                        function () {
                            HomeServices.hapus(obj).success(function (data) {
                                if (data.status.message === "success") {
                                    swal("Deleted!", "WORK!!!", "success");
                                    $scope.reload();
                                }
                            });
                        });
            };

            $scope.dtOptions = DTOptionsBuilder.newOptions()
                    .withPaginationType('full_numbers')
                    .withDisplayLength(10)
                    .withBootstrap();
            $scope.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(5).notSortable(),
                DTColumnDefBuilder.newColumnDef(4).notSortable(),
                DTColumnDefBuilder.newColumnDef(3).notSortable(),
                DTColumnDefBuilder.newColumnDef(2).notSortable()
            ];

            $scope.gritterSuccess = function (data) {
                var unique_id = $.gritter.add({
                    title: 'Notice! Success',
                    text: 'Data tempat <p style="color:#ffd777">' + data.data.nama_tempat + '</p> berhasil kami inputkan',
                    image: 'assets/img/go-park.png',
                    sticky: true,
                    time: '',
                    class_name: 'my-sticky-class'
                });
                setTimeout(function () {

                    $.gritter.remove(unique_id, {
                        fade: true,
                        speed: 'slow'
                    });

                }, 6000);
            };
        });