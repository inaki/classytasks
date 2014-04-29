angular.module('taskSignup', ['ui.bootstrap']);

function ParentCtrl($scope) {
 
  $scope.parents = [
    {name:'Pizza Party', need: 'Soda and Chips', date: '05/05/14-05/22/14', description: 'This is a party to reward the good work of students in the Math class', vname: 'Mr. Gonzo', vimg: 'images/gonzo.png', points: 13},
    {name:'Summer Camp', need: 'Patriotic Hats', date: '07/04/14', description: 'This is a party to celebrate the independence of USA', vname: 'Miss Piggy', vimg: 'images/piggy.png', points: 33},
    {name:'Garden Day', need: 'seeds', date: '05/05/14-05/22/14', description: 'This is a party to reward the good work of students in the Math class', vname: 'Sr. Sapo', vimg: 'images/kermet.png', points: 43},
    {name:'Field Day 2014', need: 'Water and Gatoraids', date: '07/04/14', description: 'This is a party to celebrate the independence of USA', vname: 'Mr. Chan', vimg: 'images/jacky.png', points: 19},
    {name:'Volunteers Year', need: 'Trash Bags', date: '05/05/14-05/22/14', description: 'This is a party to reward the good work of students in the Math class', vname: 'Elmoso', vimg: 'images/elmo.png', points: 27}
  ];

 }

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