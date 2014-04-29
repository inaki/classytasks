angular.module('addtask', ['ui.bootstrap']);
function TeacherCtrl($scope) {
 
  $scope.needs = [
    {name:'Pizza Party', need: 'Soda and Chips', date: '05/05/14-05/22/14', description: 'This is a party to reward the good work of students in the Math class', vname: 'Mr. Gonzo', vimg: 'images/gonzo.png'},
    {name:'Independence Day', need: 'Patriotic Hats', date: '07/04/14', description: 'This is a party to celebrate the independence of USA', vname: 'Miss Piggy', vimg: 'images/piggy.png'},
    {name:'Summer Camp', need: 'Lunch proposal', date: '20/05/14', description: 'We need somebody to write a proposal and search resources.', vname: 'Miss Piggy', vimg: 'images/questionMark.png'},
    {name:'Garden Day', need: 'seeds', date: '05/05/14-05/22/14', description: 'This is a party to reward the good work of students in the Math class', vname: 'Sr. Sapo', vimg: 'images/kermet.png', points: 43},
    {name:'Field Day 2014', need: 'Water and Gatoraids', date: '07/04/14', description: 'This is a party to celebrate the independence of USA', vname: 'Mr. Chan', vimg: 'images/jacky.png', points: 19},
    {name:'Volunteers Year', need: 'Trash Bags', date: '05/05/14-05/22/14', description: 'This is a party to reward the good work of students in the Math class', vname: 'Elmoso', vimg: 'images/elmo.png', points: 27}
  ];

  // $scope.addNeed = function() {
  //   $scope.todos.push({text:$scope.todoText, done:false});
  //   $scope.todoText = '';
  // };
 
  // $scope.remaining = function() {
  //   var count = 0;
  //   angular.forEach($scope.todos, function(todo) {
  //     count += todo.done ? 0 : 1;
  //   });
  //   return count;
  // };
 
  // $scope.archive = function() {
  //   var oldTodos = $scope.todos;
  //   $scope.todos = [];
  //   angular.forEach(oldTodos, function(todo) {
  //     if (!todo.done) $scope.todos.push(todo);
  //   });
  // };
}

var ModalDemoCtrl = function ($scope, $modal, $log) {

    $scope.data = {
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
           
};

