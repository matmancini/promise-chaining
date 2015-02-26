'use strict';

angular.module('app', [])

.controller('AppCtrl', function ($scope, $q) {

    function getFoo() {
        console.log('--- getFoo()');
        return $q(function (resolve, reject) {
            if(!_.random(1)) {
                resolve([1, 1, 2, 3]);
            } else {
                reject('fails in getFoo()');
            }
        });
    }

    function filterFoo(arr) {
        console.log('--- filterFoo()');
        return $q(function (resolve, reject) {
            if (!_.random(1) && arr) {
                resolve(_.uniq(arr));
            } else {
                reject('fails in filterFoo()');
            }
        })
    }

    getFoo()
    .then(filterFoo)
    .then(function (res) {
        $scope.res = res;
        console.log(res);
    }, function (e) {
        $scope.res = ['FAILED'];
        throw new Error(e);
    });

});