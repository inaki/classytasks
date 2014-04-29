angular.module('forms', ['ui.bootstrap']);

var ModalDemoCtrl = function ($scope, $modal, $log) {

    $scope.data = {
    };

    $scope.signup = function () {

        $modal.open({
            templateUrl: 'signup.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance, $log, data) {
                $scope.data = data;
                $scope.submit = function () {
                    $log.log('Submitting info.');
                    $log.log(JSON.stringify(data));
                    $modalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
                data: function () {
                    return $scope.data;
                }
            }
        });
    };
    $scope.addtask = function () {

        $modal.open({
            templateUrl: 'addtask.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance, $log, data) {
                $scope.data = data;
                $scope.submit = function () {
                    $log.log('Submitting info.');
                    $log.log(JSON.stringify(data));
                    $modalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
                data: function () {
                    return $scope.data;
                }
            }
        });
    };
    $scope.contact = function () {

        $modal.open({
            templateUrl: 'contact.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance, $log, data) {
                $scope.data = data;
                $scope.submit = function () {
                    $log.log('Submitting info.');
                    $log.log(JSON.stringify(data));
                    $modalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
                data: function () {
                    return $scope.data;
                }
            }
        });
    };        
};